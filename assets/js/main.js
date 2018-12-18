/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const fields = new Vue({
  el: '#cat',
  data: {
    categs: [
      { text: 'Select Your Area of Need', value: '' },
      { text: 'Accommodation', value: 'Accommodation' },
      { text: 'Counselling', value: 'Counselling' },
      { text: 'Drugs & Alcohol', value: 'Drugs & Alchohol' },
      { text: 'Emergency Relief', value: 'Emergency Relief' },
      { text: 'General Youth Services', value: 'General Youth Services' },
      { text: 'Homelessness', value: 'Homelessness' },
      { text: 'Mental Health', value: 'Mental Health' },
      { text: 'Sexual Health', value: 'Sexual Health' },
    ],
  },
});

const subs = new Vue({
  el: '#sub',
  data: {
    suburbs: [
      { text: 'Select Your Suburb', value: '' },
      { text: 'Maylands', value: 'Maylands' },
      { text: 'Wembley', value: 'Wembley' },
      { text: 'Albany', value: 'Albany' },
      { text: 'Rockingham', value: 'Rockingham' },
      { text: 'Mandurah', value: 'Mandurah' },
      { text: 'Spearwood', value: 'Spearwood' },
      { text: 'Armadale', value: 'Armadale' },
      { text: 'Merredin', value: 'Merredin' },
      { text: 'Narrogin', value: 'Narrogin' },
      { text: 'Belmont', value: 'Belmont' },
      { text: 'Broome', value: 'Broome' },
      { text: 'Inglewood', value: 'Inglewood' },
      { text: 'Fremantle', value: 'Fremantle' },
      { text: 'Osborne', value: 'Osborne' },
      { text: 'Canning', value: 'Canning' },
      { text: 'Balga', value: 'Balga' },
      { text: 'Leederville', value: 'Leederville' },
      { text: 'Bentley', value: 'Bentley' },
      { text: 'Bunbury', value: 'Bunbury' },
      { text: 'Dianella', value: 'Dianella' },
      { text: 'Geraldton', value: 'Geraldton' },
      { text: 'Kalgoorlie', value: 'Kalgoorlie' },
      { text: 'Karratha', value: 'Karratha' },
      { text: 'Midland', value: 'Midland' },
      { text: 'Parkerville', value: 'Parkerville' },
      { text: 'Northbridge', value: 'Northbridge' },
      { text: 'Victoria Park', value: 'Victoria Park' },
      { text: 'East Perth', value: 'East Perth' },
      { text: 'Joondalup', value: 'Joondalup' },
      { text: 'Hedland', value: 'Hedland' },
      { text: 'Beachboro', value: 'Beachboro' },
      { text: 'Denmark', value: 'Denmark' },
      { text: 'Northam', value: 'Northam' },
      { text: 'Esperance', value: 'Esperance' },
      { text: 'Roeburne', value: 'Roeburne' },
      { text: 'Mirrabooka', value: 'Mirrabooka' },
      { text: 'Busselton', value: 'Busselton' },
      { text: 'Welshpool', value: 'Welshpool' },
      { text: 'Boddington', value: 'Boddington' },
      { text: 'Cannington', value: 'Cannington' },
      { text: 'Applecross', value: 'Applecross' },
      { text: 'Nannup', value: 'Nannup' },
      { text: 'Ballajura', value: 'Ballajura' },
      { text: 'Stratton', value: 'Stratton' },
    ],
  },
});

Vue.component('orgstable', {
  props: ['org'],
  template: `
  <div class='orgs-table'>
    <table class='table'>
      <thead>
        <tr>
          <th>'Name'</th>
          <th>'Category'</th>
          <th>'Suburb'</th>
          <th>'Ages'</th>
          <th>'Contact'</th>
          <th>'Hours'</th>
          <th>'Address'</th>
          <th>'Website'</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> {{ org.OrgName }} </td>
          <td> {{ org.OrgField }} </td>
          <td> {{ org.OrgSuburb }} </td>
          <td> {{ org.OrgAge }} </td>
          <td> {{ org.OrgContact }} </td>
          <td> {{ org.OrgHours }} </td>
          <td> {{ org.OrgAddress }} </td>
          <td><a v-bind:href="org.OrgWeb"> {{ org.OrgWeb }} </a></td>
        </tr>
      </tbody>
    </table>
  </div>
  `
});
