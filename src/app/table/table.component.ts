import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { FullCountry, Country, State, City, FilteredState, FilteredCity } from '../schema';
import { fullCountry } from '../data';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, DropdownModule, ReactiveFormsModule],
  providers: [fullCountry],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})

export class TableComponent implements OnInit {
  selectedCountryIndex: number = -1;

  fullCountry!: FullCountry[];

  country: Country[] = [];
  state: State[] = [];
  city: City[] = [];

  filteredState: FilteredState[] = [];
  filteredCity: FilteredCity[] = [];

  cols!: Column[];

  formGroup!: FormGroup;

  constructor(private fullcountry: fullCountry) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedCountry: new FormControl<City | null>(null),
      selectedState: new FormControl<State | null>(null),
      selectedCity: new FormControl<City | null>(null)
    });

    this.fullcountry.getcountry().then((data) => {
      this.fullCountry = data;
      console.log('fullcountry', this.fullCountry);

      data.forEach((item) => {
        this.country.push({ id: item.id, country: item.country });
    
        const splitStateArray: string[][] = item.state.map((st) => [st]);
        console.log('splitStateArray', splitStateArray);
        this.state.push({ state: splitStateArray });
    
        const splitCityArrays: string[][][] = item.city.map((cityArray) => {
          return cityArray.map((city) => [city]);
        });
        console.log('splitCityArrays', splitCityArrays);
        this.city.push({ id: item.id, city: splitCityArrays });
      });

      console.log('country', this.country);
      console.log('state', this.state);
      console.log('city', this.city);
    });

    this.cols = [
      { field: 'country', header: 'Country' },
      { field: 'state', header: 'State' },
      { field: 'city', header: 'City' },
    ];

    this.formGroup
      .get('selectedCountry')
      ?.valueChanges.subscribe((selectedCountryId) => {
        // Reset the selected state when a new country is selected
        this.formGroup?.get('selectedState')?.reset();
        this.filteredState = [];
        this.selectedCountryIndex=selectedCountryId.id;
        
        const selectedCountryIndex = selectedCountryId?.id;

        console.log('selectedCountryId', selectedCountryId);
        console.log('selectedCountryIndex', selectedCountryIndex);

        if (selectedCountryId !== -1) {
          const selectedState = this.state[selectedCountryIndex];

          if (selectedState && selectedState.state) {
            console.log('selectedState', selectedState);
            console.log('selectedState.state', selectedState.state);

            selectedState.state.forEach((innerArray, index) => {
              const firstState = innerArray[0];
              if (firstState) {
                this.filteredState.push({ id: index, state: firstState });
              }
            });

            console.log('filteredState', this.filteredState);
          }
        } else {
          this.filteredState = [];
        }
      });

      this.formGroup
      .get('selectedState')
      ?.valueChanges.subscribe((selectedStateId) => {
        // Reset the selected state when a new country is selected
        this.formGroup.get('selectedCity')?.reset();
        this.filteredCity = [];

        const selectedStateIndex = selectedStateId?.id;

        console.log('selectedStateId', selectedStateId);
        console.log('selectedStateIndex', selectedStateIndex);

        if (selectedStateId !== -1) {
          const selectedState= this.city[this.selectedCountryIndex];
          const selectedCityTemp = selectedState?.city;
          var selectedCity: string[][]=[];

          if(selectedCityTemp!==undefined)
            {
              if(selectedCityTemp[selectedStateIndex]!==undefined)
              selectedCity=selectedCityTemp[selectedStateIndex];
            }
          
          
          console.log("selectedState",selectedState);
          console.log("selectedCityTemp",selectedCityTemp);
          console.log("selectedCity",selectedCity);

          if (selectedCity && selectedCityTemp) {
            selectedCity.forEach((innerArray, index) => {
            
              const firstCity = innerArray[0];
              if (firstCity) {
                this.filteredCity.push({ id: index, city: firstCity });
              }
            });

            console.log('filteredCity', this.filteredCity);
          }
        } else {
          this.filteredCity = [];
        }
      });

      this.formGroup
      .get('selectedCity')
      ?.valueChanges.subscribe(()=>
        console.log("formGroup",this.formGroup.value)
      )
  }
}
