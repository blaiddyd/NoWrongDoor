`<div class='orgs-table'>
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
  </div>`

  //code kept for safekeeping


  <table id="nofilter" class="table"></table>