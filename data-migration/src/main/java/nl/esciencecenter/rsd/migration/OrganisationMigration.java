package nl.esciencecenter.rsd.migration;

import com.google.gson.JsonArray;
import com.google.gson.JsonParser;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import static nl.esciencecenter.rsd.migration.Main.LEGACY_RSD_ORGANIZATION_URI;
import static nl.esciencecenter.rsd.migration.Main.get;

public class OrganisationMigration {

	static Map<Integer, Integer> hitsMap = new HashMap<>();

	public static void main(String[] args) {
		String allOrganisationsString = get(URI.create(LEGACY_RSD_ORGANIZATION_URI));
		JsonArray allOrganisationsFromLegacyRSD = JsonParser.parseString(allOrganisationsString).getAsJsonArray();
		allOrganisationsFromLegacyRSD.forEach(jsonElement -> {
			String name = jsonElement.getAsJsonObject().getAsJsonPrimitive("name").getAsString();
			name = "\"" + name + "\"";
			String encodedName = URLEncoder.encode(name.replace("/", " "), StandardCharsets.UTF_8);
			System.out.print(name + ": ");
			String result = get(URI.create("https://api.ror.org/organizations?query=" + encodedName));
			int hits = JsonParser.parseString(result).getAsJsonObject().getAsJsonPrimitive("number_of_results").getAsJsonPrimitive().getAsBigInteger().intValueExact();
			System.out.println(hits);
			int currentHits = hitsMap.getOrDefault(hits, 0);
			hitsMap.put(hits, currentHits + 1);
		});
		System.out.println(hitsMap);
	}
}
