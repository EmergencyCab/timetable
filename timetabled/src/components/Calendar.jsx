import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 AM</td>
            <Event
              event="Fancy Dinner 🍽️"
              color="green"
              location="Maple & Ash"
            />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color="green" location="747 N Wells St" />
            <td></td>
          </tr>

          <tr>
            <td className="time">9 AM</td>
            <Event
              event="Movies 🎬"
              color="green"
              location="AMC River North 16"
            />
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Subway 🚊"
              color="pink"
              location="Clark & Lake Station"
            />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">10 AM</td>
            <td></td>
            <Event
              event="River Cruise 🚤"
              color="blue"
              location="Chicago Riverwalk"
            />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">11 AM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Subway 🚇"
              color="pink"
              location="State/Lake Station"
            />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">12 PM</td>
            <td></td>
            <td></td>
            <Event event="Deep Dish 🍕" color="green" location="Giordano’s" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">1 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Girl & the Goat 🐐"
              color="green"
              location="809 W Randolph St"
            />
            <td></td>
          </tr>

          <tr>
            <td className="time">2 PM</td>
            <Event
              event="Cubs Game ⚾️"
              color="blue"
              location="Wrigley Field"
            />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">3 PM</td>
            <td></td>
            <Event
              event="Art Institute 🖼️"
              color="blue"
              location="111 S Michigan Ave"
            />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">4 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Fancy Dinner 🍵" color="green" location="Avec" />
            <td></td>
          </tr>

          <tr>
            <td className="time">5 PM</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Shopping 🛍️"
              color="blue"
              location="The Magnificent Mile"
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
