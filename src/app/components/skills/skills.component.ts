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
  ApexTitleSubtitle,
  ApexTooltip
} from "ng-apexcharts";


import {
  ApexAxisChartSeries,
  ApexMarkers
} from "ng-apexcharts";

export type RadarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis & { style?: { fontSize?: string; color?: string } };
  yaxis?: ApexYAxis;
  grid?: ApexGrid;
  dataLabels?: ApexDataLabels;
  title: ApexTitleSubtitle  | { style: { fontSize: string, marginTop: string } };
  fill: ApexFill;
  tooltip?: {
    enabled: boolean;
  };
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
  skillExp: string = '';

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
            background: `var(--background-color)`,
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
            background: `var(--text-color)`,
            strokeWidth: "95%",
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
              color: `var(--text-color)`,
              fontSize: "clamp(1rem, 15px, 3rem)"
            },
            value: {
              formatter: function (val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: `var(--text-color)`,
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
          data: [65, 25, 55, 98, 95, 85]
        }
      ],
      chart: {
        height: 325,
        type: "radar"
      },
      xaxis: {
        categories: ["Mobile Development", "Testing", "Ui/Ux", "Web Development", "Frontend", "Backend"],
        style: {
          fontSize: "clamp(0.6rem, 8px, 1rem)",
          color: `var(--text-color)`
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
        show: false,
        borderColor: '#e0e0e0',
        strokeDashArray: 2
      },
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          foreColor: `var(--text-color)`,
          borderRadius: 4,
          padding: 5,
          borderWidth: 0.5,
          borderColor: 'var(--text-color',
          opacity: 0.5
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.2,
          gradientToColors: ["#DB5779"],
          inverseColors: true,
          opacityFrom: 0.9,
          opacityTo: 0.7,
          stops: [0, 100]
        }
      },
      tooltip: {
        enabled: false // Disable tooltips
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
    this.skillExp = this.skills[index].exp;

    this.chartOptions.series = [skillPerNumber];
  }
}
