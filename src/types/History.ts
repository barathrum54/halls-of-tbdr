export interface HistoryItem {
  title: string;
  description: string[];
  dateStart: string;
  dateEnd: string;
  role: string;
  stack: string[];
  company: {
    name: string;
    icon: string;
    website: string;
  };
}
