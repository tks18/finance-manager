import { useState } from 'react';
import {
  Typography,
  Unstable_Grid2 as Grid,
  TextField,
  Button,
} from '@mui/material';
import { api } from '@plugins/backend';
import { DatePicker } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';
import { toast } from 'react-toastify';

import { useAuthOutletContext } from '@routes/Auth/hooks';

export function AuthSettingsCalendar() {
  const [formData, setFormData] = useState<string>('');
  const [endDate, setEndDate] = useState<DateTime>(DateTime.now());

  const { userToken } = useAuthOutletContext();

  const onDateValueChange = (newValue: DateTime) => {
    setEndDate(newValue);
    setFormData(newValue.toFormat('yyyy-LL-dd'));
  };

  const submitCalendarDate = async () => {
    try {
      const apiData = {
        options: {
          endDate: formData,
        },
      };
      const response = await api.setup.buildCalendar(userToken, apiData);
      toast.success(response.data.message);
    } catch (e) {
      toast.error(String(e));
    }
  };

  return (
    <Grid container rowSpacing={1}>
      <Grid
        rowSpacing={1}
        xs={12}
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 'bold' }} variant="h5">
          Setup Calendar Table
        </Typography>
      </Grid>
      <Grid
        rowSpacing={1}
        xs={12}
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        container
      >
        <Grid sm={4} xs={12} rowSpacing={1}>
          <DatePicker
            value={endDate}
            onChange={(newValue) => {
              const dateValue = newValue as DateTime;
              onDateValueChange(dateValue);
            }}
            inputFormat="yyyy-LL-dd"
            mask="____-__-__"
            renderInput={(params) => (
              <TextField
                label="Enter the End Date"
                sx={{ width: '100%' }}
                {...params}
                required={true}
              />
            )}
          />
        </Grid>
        <Grid
          sm={4}
          xs={12}
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Button variant="contained" onClick={submitCalendarDate}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
