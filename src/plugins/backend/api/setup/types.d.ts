export interface IBuildCalendarInput {
  options: {
    endDate: string;
  };
}

export interface IBuildCalendar {
  message: string;
  sampleCalendarRow: {
    _id: number;
    date: string;
    day_id: number;
    day_name: string;
    day_name_short: string;
    day_type: string;
    week_id: number;
    start_of_week: string;
    end_of_week: string;
    week_name: string;
    month_id: number;
    fy_month_id: number;
    start_of_month: string;
    day_of_month: number;
    end_of_month: string;
    month_name: string;
    month_name_short: string;
    quarter_id: number;
    fy_quarter_id: number;
    start_of_quarter: string;
    day_of_quarter: number;
    end_of_quarter: string;
    quarter_name: string;
    fy_quarter_name: string;
    year_id: number;
    start_of_year: string;
    day_of_year: number;
    end_of_year: string;
    financial_year: string;
    assesment_year: string;
  };
}
