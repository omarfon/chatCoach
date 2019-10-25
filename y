rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /chatsRooms/{userId} {
    	function isOwner() {
      	return request.auth.uid == userId;
      }
      function isOwnerOrCoach() {
        return request.auth.uid == userId || request.auth.uid == '5d6d9d58135c2609abc5864c';
      }
      allow create: if true;
      allow read: if isOwnerOrCoach();
			match /{document=**} {
      	allow read: if isOwnerOrCoach();
        allow create: if isOwnerOrCoach();
        allow write: if isOwnerOrCoach();
        allow update: if isOwnerOrCoach();
      }
    }
  }
}