import { Card } from "@/components/ui/card";

interface PrizeJudgeTabProps {
  hackathonId: string;
}

export function PrizeJudgeTab({ hackathonId }: PrizeJudgeTabProps) {
  return (
    <div className="space-y-8">
      {/* Tech Fairness Exploration Awards */}
      <div>
        <div className="flex items-start space-x-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">18,000 USD</div>
            <div className="text-sm text-neutral-400">
              Tech Fairness Exploration
            </div>
            <div className="text-sm text-neutral-400">Awards (9 winners)</div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">
              1. Tech Fairness Exploration Awards (9 winners)
            </h3>
            <p className="text-neutral-300 mb-4">
              This track is open to all topics as long as your work addresses
              "tech fairness." We welcome both builders and storytellers—whether
              you're coding a protocol, designing a governance interface, or
              building a meme engine.
            </p>
            <p className="text-neutral-300 mb-4">
              Suggested directions (not limited to):
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-1 mb-4">
              <li>Algorithm transparency and interpretability</li>
              <li>Data sovereignty and privacy protection</li>
              <li>Sustainable income in the AI era</li>
              <li>Creator-first infrastructure and anti-platform design</li>
              <li>Identity, reputation and governance frameworks</li>
              <li>Decentralized storytelling and public discourse tools</li>
              <li>Human-centered AI & Web3 interactions</li>
            </ul>
            <p className="text-neutral-300 mb-4">
              Judging criteria include originality, usability, impact, and
              alignment with the theme of fairness.
            </p>
            <p className="text-neutral-300">
              Each selected team will receive 2,000 USD worth of FAIR3 tokens.
            </p>
          </div>
        </div>

        {/* Evaluation Criteria */}
        <Card className="bg-neutral-800 border-neutral-700 p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4">Evaluation Criteria</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-600">
                  <th className="text-left py-2 text-neutral-400">Name</th>
                  <th className="text-left py-2 text-neutral-400">
                    Description
                  </th>
                  <th className="text-right py-2 text-neutral-400">
                    Max Score
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-neutral-700">
                  <td className="py-3">Originality</td>
                  <td className="py-3 text-neutral-300">
                    Is the idea novel and imaginative? Does it offer a new take
                    on an old problem?
                  </td>
                  <td className="py-3 text-right">20</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3">Relevance to Tech Fairness</td>
                  <td className="py-3 text-neutral-300">
                    Does the project address core fairness challenges (algorithm
                    transparency, data sovereignty, sustainable income, etc.)?
                  </td>
                  <td className="py-3 text-right">25</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3">Functionality & Implementation</td>
                  <td className="py-3 text-neutral-300">
                    How well is the project executed? Is there a working demo or
                    prototype?
                  </td>
                  <td className="py-3 text-right">20</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3">Impact & Usefulness</td>
                  <td className="py-3 text-neutral-300">
                    Can this project be applied to real communities or users? Is
                    it scalable or integrable?
                  </td>
                  <td className="py-3 text-right">20</td>
                </tr>
                <tr>
                  <td className="py-3">Design & Clarity</td>
                  <td className="py-3 text-neutral-300">
                    Is the presentation intuitive? Is the design and
                    documentation clear enough to be understood and used?
                  </td>
                  <td className="py-3 text-right">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Voting Section */}
        <Card className="bg-neutral-800 border-neutral-700 p-6">
          <h4 className="text-lg font-semibold mb-4">Voting</h4>
          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Judges</div>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Wizzy</div>
                  <div className="text-sm text-neutral-400">@WizzyOnChain</div>
                </div>
                <div>
                  <div className="font-medium">Doodle</div>
                  <div className="text-sm text-neutral-400">@Doodlegenics</div>
                </div>
                <div>
                  <div className="font-medium">lynk</div>
                  <div className="text-sm text-neutral-400">@lynkxyz</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Judging Mode</div>
              <div>Judges Only</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Voting Mode</div>
              <div>Project Scoring</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold mb-1">
              Max votes per Judge
            </div>
            <div>100</div>
          </div>
        </Card>
      </div>

      {/* FAIR3 Public Infrastructure Awards */}
      <div>
        <div className="flex items-start space-x-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">6,000 USD</div>
            <div className="text-sm text-neutral-400">
              FAIR3 Public Infrastructure
            </div>
            <div className="text-sm text-neutral-400">Awards (3 winners)</div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">
              2. FAIR3 Public Infrastructure Awards (3 winners)
            </h3>
            <p className="text-neutral-300 mb-4">
              This track is open to all topics as long as your work addresses
              "tech fairness." We welcome both builders and storytellers—whether
              you're coding a protocol, designing a governance interface, or
              building a meme engine.
            </p>
            <p className="text-neutral-300 mb-4">
              Suggested directions (not limited to):
            </p>
            <ul className="list-disc list-inside text-neutral-300 space-y-1 mb-4">
              <li>Algorithm transparency and interpretability</li>
              <li>Data sovereignty and privacy protection</li>
              <li>Sustainable income in the AI era</li>
              <li>Creator-first infrastructure and anti-platform design</li>
              <li>Identity, reputation and governance frameworks</li>
              <li>Decentralized storytelling and public discourse tools</li>
              <li>Human-centered AI & Web3 interactions</li>
            </ul>
            <p className="text-neutral-300 mb-4">
              Judging criteria include originality, usability, impact, and
              alignment with the theme of fairness.
            </p>
            <p className="text-neutral-300">
              Each selected team will receive 2,000 USD worth of FAIR3 tokens.
            </p>
          </div>
        </div>

        {/* Evaluation Criteria for FAIR3 */}
        <Card className="bg-neutral-800 border-neutral-700 p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4">Evaluation Criteria</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-600">
                  <th className="text-left py-2 text-neutral-400">Name</th>
                  <th className="text-left py-2 text-neutral-400">
                    Description
                  </th>
                  <th className="text-right py-2 text-neutral-400">Score</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-neutral-700">
                  <td className="py-3">Originality</td>
                  <td className="py-3 text-neutral-300">
                    Is the idea novel and imaginative? Does it offer a new take
                    on an old problem?
                  </td>
                  <td className="py-3 text-right">20</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3">Relevance to Tech Fairness</td>
                  <td className="py-3 text-neutral-300">
                    Does the project address core fairness challenges (algorithm
                    transparency, data sovereignty, sustainable income, etc.)?
                  </td>
                  <td className="py-3 text-right">25</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3">Functionality & Implementation</td>
                  <td className="py-3 text-neutral-300">
                    How well is the project executed? Is there a working demo or
                    prototype?
                  </td>
                  <td className="py-3 text-right">20</td>
                </tr>
                <tr className="border-b border-neutral-700">
                  <td className="py-3">Impact & Usefulness</td>
                  <td className="py-3 text-neutral-300">
                    Can this project be applied to real communities or users? Is
                    it scalable or integrable?
                  </td>
                  <td className="py-3 text-right">20</td>
                </tr>
                <tr>
                  <td className="py-3">Design & Clarity</td>
                  <td className="py-3 text-neutral-300">
                    Is the presentation intuitive? Is the design and
                    documentation clear enough to be understood and used?
                  </td>
                  <td className="py-3 text-right">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Voting Section for FAIR3 */}
        <Card className="bg-neutral-800 border-neutral-700 p-6">
          <h4 className="text-lg font-semibold mb-4">Voting</h4>
          <div className="grid grid-cols-3 gap-6 mb-4">
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Judges</div>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Wizzy</div>
                  <div className="text-sm text-neutral-400">@WizzyOnChain</div>
                </div>
                <div>
                  <div className="font-medium">Doodle</div>
                  <div className="text-sm text-neutral-400">@Doodlegenics</div>
                </div>
                <div>
                  <div className="font-medium">lynk</div>
                  <div className="text-sm text-neutral-400">@lynkxyz</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Judging Mode</div>
              <div>Judges Only</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Voting Mode</div>
              <div>Project Scoring</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold mb-1">
              Max votes per Judge
            </div>
            <div>100</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
