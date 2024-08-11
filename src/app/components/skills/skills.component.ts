import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexDataLabels,
  ApexTitleSubtitle
} from "ng-apexcharts";


import {
  ApexAxisChartSeries,
  ApexMarkers
} from "ng-apexcharts";

export type RadarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis & {style: {fontSize: string}};
  yaxis?: ApexYAxis;
  grid?: ApexGrid;
  dataLabels?: ApexDataLabels;
  title: ApexTitleSubtitle  | { style: { fontSize: string, marginTop: string } };
  fill: ApexFill;
};

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @ViewChild("radarChart") radarChart!: ChartComponent;
  public radarChartOptions: Partial<RadarChartOptions>;

  @Input() title: string = "";
  @Input() skills: any = [];

  activeSkillIndex: number = 0;
  skillName: string = '';

  constructor() {
    this.chartOptions = {
      series: [75],
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -172,
          endAngle: 184,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "clamp(1rem, 15px, 3rem)"
            },
            value: {
              formatter: function (val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"]
    };

    this.radarChartOptions = {
      series: [
        {
          name: "Percentage",
          data: [95, 85, 55, 98, 60, 20]
        }
      ],
      chart: {
        height: 325,
        type: "radar"
      },
      title: {
        text: "Skill Analysis"
      },
      xaxis: {
        categories: ["Front-end", "Backend", "Ui/Ux", "Web Development", "Mobile Development", "Testing"],
        style: {
          fontSize: "clamp(0.6rem, 8px, 1rem)",
        }
      },
      yaxis: {
        show: false,
        tickAmount: 5,
        labels: {
          formatter: (value) => `${value}%`
        }
      },
      grid: {
        show: true,
        borderColor: '#e0e0e0',
        strokeDashArray: 2
      },
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          foreColor: '#fff',
          borderRadius: 2,
          padding: 4,
          borderWidth: 1,
          borderColor: '#e0e0e0',
          opacity: 0.9
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.2,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 0.8,
          opacityTo: 0.8,
          stops: [0, 100]
        }
      }
    };
  }

  ngOnInit(): void {
    this.checkSkill(1)
  }

  checkSkill(index: number) {
    const skillPer = this.skills[index].per;
    const skillPerNumber = parseFloat(skillPer.replace('%', ''));
    this.activeSkillIndex = index;
    this.skillName = this.skills[index].title;

    this.chartOptions.series = [skillPerNumber];
  }
}
