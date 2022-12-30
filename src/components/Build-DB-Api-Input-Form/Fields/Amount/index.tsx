import { InputAdornment, TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';

import type { TextFieldProps } from '@mui/material';
import { Dispatch, SetStateAction, useEffect } from 'react';
import type { NumericFormatProps } from 'react-number-format';
import type { NumberFormatValues, SourceInfo } from 'react-number-format';
import type {
  IFieldBaseProps,
  TFieldAmount,
  TFieldCalculatedAmount,
  TFieldAmountCalculatedOperations,
} from '@plugins/backend/api/data/inputs';

type TCustomAmount = IFieldBaseProps & TFieldAmount;

type TCustomCalculatedAmount = IFieldBaseProps & TFieldCalculatedAmount;

type TAmountFieldProps = NumericFormatProps &
  TextFieldProps & {
    field: TCustomAmount;
    fields: {
      state: {
        [key: string]: any;
      };
      set: Dispatch<
        SetStateAction<{
          [key: string]: any;
        }>
      >;
    };
    amountFields: {
      state: {
        [key: string]: any;
      };
      set: Dispatch<
        SetStateAction<{
          [key: string]: any;
        }>
      >;
    };
    operationalAmounts: {
      state: {
        [key: string]: number;
      };
      set: Dispatch<
        SetStateAction<{
          [key: string]: number;
        }>
      >;
    };
  };

type TCalculatedAmountFieldProps = NumericFormatProps &
  TextFieldProps & {
    field: TCustomCalculatedAmount;
    fields: {
      state: {
        [key: string]: any;
      };
      set: Dispatch<
        SetStateAction<{
          [key: string]: any;
        }>
      >;
    };
  };

export function CustomAmountField(props: TAmountFieldProps) {
  const { field, fields, amountFields, operationalAmounts } = props;

  const onAmountValueChange = (
    constructedValue: string,
    values: NumberFormatValues,
    sourceInfo: SourceInfo,
  ) => {
    sourceInfo.event?.preventDefault();
    const { formattedValue, floatValue } = values;
    fields.set({
      ...fields.state,
      [constructedValue]: floatValue,
    });
    amountFields.set({
      ...amountFields.state,
      [constructedValue]: formattedValue,
    });
    operationalAmounts.set({
      ...operationalAmounts.state,
      [constructedValue]: Number(floatValue),
    });
  };

  const handleFieldOperation = (
    field1: number,
    field2: number,
    operation: TFieldAmountCalculatedOperations,
  ) => {
    switch (operation) {
      case 'add':
        return field1 + field2;
      case 'subtract':
        return field1 - field2;
      case 'multiply':
        return field1 * field2;
      case 'divide':
        return field1 / field2;
    }
  };

  const findOperationHelperFields = () => {
    const depArray: any[] = [];
    if (field.affectsCalculatedField) {
      const { operations } = field.affectsCalculatedField;
      for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        const { affectedField, affectedFieldType } = operation;
        if (affectedFieldType === 'helperField') {
          depArray.push(operationalAmounts.state[affectedField]);
        }
      }
      return depArray;
    } else {
      return [];
    }
  };

  const useEffectDependencies = [
    ...findOperationHelperFields(),
    fields.state[field.constructedValue],
  ];

  useEffect(() => {
    if (field.affectsCalculatedField) {
      const operationsToPerform = field.affectsCalculatedField.operations;
      const stateOperations = operationsToPerform.filter(
        (operation) => operation.affectedFieldType === 'stateField',
      );
      for (let i = 0; i < stateOperations.length; i++) {
        const operation = stateOperations[i];
        if (operation.affectedFieldType === 'stateField') {
          const {
            field1,
            field2,
            operation: fieldOperation,
            affectedField,
          } = operation;
          const [field1Value, field2Value] = [
            operationalAmounts.state[field1],
            operationalAmounts.state[field2],
          ];
          const operationResult = handleFieldOperation(
            field1Value,
            field2Value,
            fieldOperation,
          );
          fields.set({
            ...fields.state,
            [affectedField]: operationResult,
          });
          operationalAmounts.set({
            ...operationalAmounts.state,
            [affectedField]: operationResult,
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useEffectDependencies);

  useEffect(() => {
    if (field.affectsCalculatedField) {
      const operationsToPerform = field.affectsCalculatedField.operations;
      const helperOperations = operationsToPerform.filter(
        (operation) => operation.affectedFieldType === 'helperField',
      );
      const stateChange: { [key: string]: number } = {};
      for (let i = 0; i < helperOperations.length; i++) {
        const operation = helperOperations[i];
        if (operation.affectedFieldType === 'helperField') {
          const {
            field1,
            field2,
            operation: fieldOperation,
            affectedField,
          } = operation;
          const [field1Value, field2Value] = [
            operationalAmounts.state[field1],
            operationalAmounts.state[field2],
          ];
          const operationResult = handleFieldOperation(
            field1Value,
            field2Value,
            fieldOperation,
          );
          stateChange[affectedField] = operationResult;
        }
      }
      operationalAmounts.set((state) => ({
        ...state,
        ...stateChange,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useEffectDependencies);

  const isStateUndefined =
    fields.state[field.constructedValue] === undefined &&
    amountFields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <NumericFormat<TextFieldProps>
      {...field.baseProps}
      {...field.textProps}
      type={'text'}
      sx={{ width: '100%' }}
      defaultValue={0}
      customInput={TextField}
      InputProps={
        ![undefined, ''].includes(fields.state[field.constructedValue])
          ? {
              startAdornment: (
                <InputAdornment position="start">
                  {field.startIcon}
                </InputAdornment>
              ),
            }
          : {}
      }
      name={field.constructedValue}
      value={amountFields.state[field.constructedValue]}
      onValueChange={(v, s) => {
        onAmountValueChange(field.constructedValue, v, s);
      }}
    />
  );
}

export function CustomCalculatedAmountField(
  props: TCalculatedAmountFieldProps,
) {
  const { field, fields } = props;

  const isStateUndefined = fields.state[field.constructedValue] === undefined;

  return isStateUndefined ? (
    <></>
  ) : (
    <NumericFormat<TextFieldProps>
      {...field.baseProps}
      {...field.textProps}
      type={'text'}
      sx={{ width: '100%' }}
      defaultValue={0}
      customInput={TextField}
      InputProps={
        ![NaN, undefined, ''].includes(fields.state[field.constructedValue])
          ? {
              startAdornment: (
                <InputAdornment position="start">
                  {field.startIcon}
                </InputAdornment>
              ),
            }
          : {}
      }
      disabled={true}
      name={field.constructedValue}
      value={fields.state[field.constructedValue]}
      valueIsNumericString={true}
    />
  );
}
