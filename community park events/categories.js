
            function filterEvents() {
                console.log('filter events');
              fetch('https://data.cityofnewyork.us/resource/6v4b-5gp4.json')
                .then(response => response.json())
                .then(data => {
                 console.log(data);
                  const filteredData = data.filter(event => {
                    // console.log(event['date_and_time']);
                    const year = new Date(event['date_and_time']).getFullYear();
                    console.log(year);
                    return year >= 2017 && year <= 2021;
                  });

                  console.log(filteredData);
               
                  const eventsDiv = document.getElementById('events');
                  eventsDiv.innerHTML = '';
                  filteredData.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = `event event-year-${new Date(event.date_and_time).getFullYear()}`;
                    eventElement.innerHTML = `
                      <h2>${event.event_name}</h2>
                      <p>Borough: ${event.borough}</p>
                      <p>Location: ${event.location}</p>
                      <p>Attendance: ${event.attendance}</p>
                    `;
                    eventsDiv.appendChild(eventElement);
                   

                  });
                });
            }

            


              const endpoint = 'https://data.cityofnewyork.us/resource/6v4b-5gp4.json';
              const dataDiv = document.querySelector('#data');
              
              function toggleData() {
                  // check if data is already displayed
                  if (dataDiv.innerHTML !== '') {
                      dataDiv.innerHTML = '';
                  } else {
                      // fetch the data from the endpoint
                      fetch(endpoint)
                          .then(response => response.json())
                          .then(data => {
                              // create a table to display the data
                              const table = document.createElement('table');
              
                              // create the table header
                              const headerRow = table.insertRow();
                              const locationHeader = headerRow.insertCell();
                              locationHeader.innerText = 'Location';
                              const boroughHeader = headerRow.insertCell();
                              boroughHeader.innerText = 'Borough';
                              const categoryHeader = headerRow.insertCell();
                              categoryHeader.innerText = 'Category';
                              const attendanceHeader = headerRow.insertCell();
                              attendanceHeader.innerText = 'Attendance';
              
                              // loop through the data and create table rows
                              data.forEach(item => {
                                  const row = table.insertRow();
                                  const location = row.insertCell();
                                  location.innerText = item.location;
                                  const borough = row.insertCell();
                                  borough.innerText = item.borough;
                                  const category = row.insertCell();
                                  category.innerText = item.category;
                                  const attendance = row.insertCell();
                                  attendance.innerText = item.attendance;
                              });
              
                              // add the table to the dataDiv
                              dataDiv.appendChild(table);
                          })
                          .catch(error => console.log(error));
                  }
              }
              





