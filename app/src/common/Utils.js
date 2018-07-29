

export default class Utils {

  static getDateString = dateString => new Date(dateString).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
  

  static getTimeString = dateString => new Date(dateString).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  static getYear = dateString => new Date(dateString).getFullYear();
}