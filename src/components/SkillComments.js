import React, { useState } from 'react';
import { MessageCircle, Send, Trash2, Edit3, X, Check, Sparkles } from 'lucide-react';
import { getCommentSuggestions } from '../data/commentSuggestions';

const SkillComments = ({ skillId, skill, comments = [], onAddComment, onEditComment, onDeleteComment }) => {
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editText, setEditText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(skillId, newComment.trim());
      setNewComment('');
      setShowSuggestions(false);
    }
  };

  const handleShowSuggestions = () => {
    if (skill) {
      const commentSuggestions = getCommentSuggestions(skill);
      setSuggestions(commentSuggestions);
      setShowSuggestions(!showSuggestions);
    }
  };

  const handleUseSuggestion = (suggestion) => {
    setNewComment(suggestion);
    setShowSuggestions(false);
  };

  const handleEditComment = (commentId, currentText) => {
    setEditingCommentId(commentId);
    setEditText(currentText);
  };

  const handleSaveEdit = (commentId) => {
    if (editText.trim()) {
      onEditComment(skillId, commentId, editText.trim());
      setEditingCommentId(null);
      setEditText('');
    }
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditText('');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="mt-4 border-t border-secondary-200 pt-4">
      {/* Comments Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
        >
          <MessageCircle size={16} />
          <span className="text-sm font-medium">
            Comments ({comments.length})
          </span>
        </button>
      </div>

      {/* Smart Comment Suggestions */}
      {skill && (
        <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-800">AI-Powered Insights</span>
            </div>
            <button
              onClick={handleShowSuggestions}
              className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              {showSuggestions ? 'Hide' : 'Show'} Suggestions
            </button>
          </div>
          
          {showSuggestions && (
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleUseSuggestion(suggestion)}
                  className="w-full text-left p-2 bg-white rounded border border-blue-200 hover:bg-blue-50 transition-colors duration-200 text-sm text-blue-700"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Add Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment about your progress..."
            className="flex-1 px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all duration-200"
            maxLength={500}
          />
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-1"
          >
            <Send size={14} />
            <span className="text-sm">Add</span>
          </button>
        </div>
        {newComment.length > 0 && (
          <div className="text-xs text-secondary-500 mt-1">
            {newComment.length}/500 characters
          </div>
        )}
      </form>

      {/* Comments List */}
      {showComments && (
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {comments.length === 0 ? (
            <div className="text-center py-4 text-secondary-500">
              <MessageCircle size={24} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm">No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-secondary-50 rounded-lg p-3">
                {editingCommentId === comment.id ? (
                  // Edit Mode
                  <div className="space-y-2">
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none"
                      rows="2"
                      maxLength={500}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-secondary-500">
                        {editText.length}/500 characters
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSaveEdit(comment.id)}
                          className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors duration-200"
                        >
                          <Check size={14} />
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="p-1 text-secondary-600 hover:bg-secondary-100 rounded transition-colors duration-200"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // View Mode
                  <div>
                                         <div className="flex items-start justify-between mb-2">
                       <div className="flex items-center space-x-2">
                         <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                           comment.isAutoGenerated 
                             ? 'bg-gradient-to-r from-purple-100 to-pink-100' 
                             : 'bg-primary-100'
                         }`}>
                           {comment.isAutoGenerated ? (
                             <Sparkles size={12} className="text-purple-600" />
                           ) : (
                             <span className="text-xs font-medium text-primary-600">
                               {comment.author.charAt(0).toUpperCase()}
                             </span>
                           )}
                         </div>
                         <span className={`text-sm font-medium ${
                           comment.isAutoGenerated 
                             ? 'text-purple-800' 
                             : 'text-secondary-900'
                         }`}>
                           {comment.author}
                         </span>
                         {comment.isAutoGenerated && (
                           <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                             AI Insight
                           </span>
                         )}
                       </div>
                                             <div className="flex items-center space-x-1">
                         {!comment.isAutoGenerated && (
                           <>
                             <button
                               onClick={() => handleEditComment(comment.id, comment.text)}
                               className="p-1 text-secondary-600 hover:bg-secondary-100 rounded transition-colors duration-200"
                             >
                               <Edit3 size={12} />
                             </button>
                             <button
                               onClick={() => onDeleteComment(skillId, comment.id)}
                               className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors duration-200"
                             >
                               <Trash2 size={12} />
                             </button>
                           </>
                         )}
                       </div>
                    </div>
                    <p className="text-sm text-secondary-700 mb-2">{comment.text}</p>
                    <span className="text-xs text-secondary-500">
                      {formatDate(comment.timestamp)}
                    </span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SkillComments; 