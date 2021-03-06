const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

// Matches with "/api/profiles"
router.route("/")
  .get(profilesController.findAll)
  .post(profilesController.create);

// Matches with "/api/profiles/collabs"
router.route("/collabs")
.get(profilesController.findAll)
.post(profilesController.updateCollab);

// Matches with "/api/profiles/collabs"
router.route("/request")
.get(profilesController.findAll)
.post(profilesController.saveRequest);

// Matches with "/api/profiles/collabs"
router.route("/remove")
.get(profilesController.findAll)
.post(profilesController.removeRequest);

// Matches with "/api/profiles/:skills"
 router
.route("/skills/:skills")
.get(profilesController.findBySkill)
.put(profilesController.update)
.delete(profilesController.remove);

// Matches with "/api/profiles/:skills"
router
.route("/email/:email")
.get(profilesController.findByEmail)
.put(profilesController.update)
.delete(profilesController.remove);

module.exports = router;
