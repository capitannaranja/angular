import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

	private recipes: Array<Recipe> = [
	    new Recipe("Maultaschen", "Kobi", "https://www.stuttgart-tourist.de/images/x/q/w/q/o/r/p/0/w/d/8/-/maultasche.jpeg", "Ob mit Zwiebeln geschmelzt, in Brühe gekocht oder mit Ei geröstet - die schwäbische Spezialität ist so lecker, dass sie heute in vielerlei Kombinationen auf dem Speiseplan steht. Der Klassiker besteht unter anderem aus Spinat, Tatar, Zwiebeln und Kräutern, aber auch vegetarische Varianten oder Leckereien wie Lachsmaultaschen sind beliebt."),
	    new Recipe("Schwäbischer Kartoffelsalat", "Tobias", "https://www.stuttgart-tourist.de/images/3/p/3/c/g/g/m/y/7/p/w/-/kartoffelsalat.jpeg", "Traditionell mit Maultaschen, als Beilage zu Saitenwürstle, zum Grillen oder einfach im gemischten Salat - der schwäbische Kartoffelsalat passt zu fast allem und schmeckt einfach gut! Hauptsache, er ist schön schmotzig."),
	    new Recipe("Linsen und Spätzle", "Marco", "https://www.stuttgart-tourist.de/images/b/6/1/l/g/x/w/d/o/h/q/-/linsen-und-spaetzle.jpeg", "Linsen und Spätzle - das Traditionsgericht der schwäbischen Küche. Mit Saitenwürsten ein absoluter Klassiker. Nicht vergessen: Essig und Senf zum Abschmecken am Tisch bereitstellen!"),
	    new Recipe("Apfelküchle", "Marco", "https://www.stuttgart-tourist.de/images/h/v/u/9/4/b/l/i/5/4/u/-/apfelkuechle.jpeg", "Lust auf Süßes? Die schwäbischen Apfelküchle eignen sich als leckeres Dessert oder süße Mahlzeit und schmecken besonders gut mit Vanilleeis oder -soße."),
	    new Recipe("Kirschmichl", "Steffen", "https://www.stuttgart-tourist.de/images/!/q/m/w/o/1/r/3/8/d/u/-/ofenschlupfer.jpeg", "Am besten warm genießen: Der Ofenschlupfer ist Dessertgenuß mit langer Tradition. Die schwäbische Süßspeise zergeht auf der Zunge. Lecker mit Vanillesoße!"),
	    new Recipe("Kässpätzle", "Christof", "https://www.stuttgart-tourist.de/images/c/p/8/k/f/w/o/q/i/n/8/-/kaesspaetzle.jpeg", "Herzhafte Hausmannskost vom Feinsten. Leckere Spätzle nach schwäbischem Rezept, kombiniert mit Käse und Röstzwiebeln - unbedingt probieren!"),
	    new Recipe("Zwiebelrostbraten", "Steffen", "https://www.stuttgart-tourist.de/images/3/9/o/w/l/g/h/6/b/l/c/-/05b94880e745fdc0a6b79610d0b74cb1.jpeg", "Zart-mürbes Fleisch, geröstete Zwiebeln, eine delikate Soße: Ein guter Zwiebelrostbraten ist unwiderstehlich!"),
	    new Recipe("Gaisburger Marsch", "Christof", "https://www.stuttgart-tourist.de/images/m/t/y/s/o/w/8/w/m/c/8/-/b14c00b438a4f34af5404ea8b675bdb9.jpeg", "Gaisburger Marsch, Verheierte, Kartoffelschnitz und Spätzle oder Böckinger Feldgeschrei ist ein traditionelles schwäbisches Eintopfgericht."),
	    new Recipe("Zwiebelkuchen", "Tobias", "https://www.stuttgart-tourist.de/images/5/f/z/d/c/n/a/l/c/n/c/-/zwiebelkuchen.jpeg", "Der deftige Zwiebelkuchen wird meistens im Herbst gegessen - und schmeckt besonders lecker zu neuem Wein! Probieren Sie selbst. Und wenn Sie Zwiebelkuchen mögen: Besuchen Sie einmal das Zwiebelfest in Esslingen am Neckar!"),
	    new Recipe("Süddeutsches Laugengebäck", "Kobi", "https://www.stuttgart-tourist.de/images/i/q/l/y/q/p/l/o/v/a/y/-/brezel.jpeg", "Die Brezel ist traditioneller Snack in Schwaben und wird zu jeder Tageszeit gerne gegessen: ganz einfach pur, mit Butter, lecker belegt oder als Beilage. Das salzige Laugengebäck bekommen Sie bei jedem Bäcker. Besonders lecker sind die Brezeln frisch aus dem Ofen!"),
	];

  	constructor() { }

	ngOnInit() {
	}

}
