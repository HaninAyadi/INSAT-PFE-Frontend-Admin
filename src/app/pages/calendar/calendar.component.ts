// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGrigPlugin from '@fullcalendar/timegrid'; 
// import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { FullCalendarComponent, CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Calendar } from '@fullcalendar/core';
import { Soutenance } from '../../utils/models/Soutenance';
import { CalendarService } from '../../services/calendar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  soutenances: Array<Soutenance> = [];
  events: Array<any> = [];
  calendarOptions: CalendarOptions;

  isLoading = false;

  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;

  constructor(private calendarService: CalendarService,
    private http: HttpClient) { }

  ngOnInit(): void {

    forwardRef(() => Calendar);
    this.isLoading = true;
    this.calendarService.getSoutenances().subscribe( data => {
      this.soutenances.push.apply(this.soutenances, data);
      console.log(this.soutenances);
      for (let i = 0; i < this.soutenances.length; i++) {
        let newEvent = {
          title: this.soutenances[i].subjectPfe ? this.soutenances[i].subjectPfe.title : '',
          date: new Date(this.soutenances[i].dateTime).toISOString().slice(0, 10)
        };
        this.events.push(newEvent);
      }
      this.calendarOptions = {
        // plugins: [dayGridPlugin, timeGrigPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        editable: true,
        dateClick: this.handleDateClick.bind(this),
        events: this.events,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
      };
      this.isLoading = false;
    });
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}
