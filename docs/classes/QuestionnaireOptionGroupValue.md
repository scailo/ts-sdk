[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupValue

# Class: QuestionnaireOptionGroupValue

Represents the finalized state of a single individual choice (value) associated with a Questionnaire Option Group.
This message encapsulates the core mapping of a distinct answer option (e.g., "Yes", "N/A", "5 - Excellent"),
including its display sequence, parent group association, and standard compliance metadata.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupValue

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)\>

  ↳ **`QuestionnaireOptionGroupValue`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupValue.md#constructor)

### Properties

- [approvalMetadata](QuestionnaireOptionGroupValue.md#approvalmetadata)
- [entityUuid](QuestionnaireOptionGroupValue.md#entityuuid)
- [metadata](QuestionnaireOptionGroupValue.md#metadata)
- [needApproval](QuestionnaireOptionGroupValue.md#needapproval)
- [questionnaireOptionGroupId](QuestionnaireOptionGroupValue.md#questionnaireoptiongroupid)
- [sortOrder](QuestionnaireOptionGroupValue.md#sortorder)
- [userComment](QuestionnaireOptionGroupValue.md#usercomment)
- [value](QuestionnaireOptionGroupValue.md#value)
- [fields](QuestionnaireOptionGroupValue.md#fields)
- [runtime](QuestionnaireOptionGroupValue.md#runtime)
- [typeName](QuestionnaireOptionGroupValue.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupValue.md#clone)
- [equals](QuestionnaireOptionGroupValue.md#equals)
- [fromBinary](QuestionnaireOptionGroupValue.md#frombinary)
- [fromJson](QuestionnaireOptionGroupValue.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupValue.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupValue.md#gettype)
- [toBinary](QuestionnaireOptionGroupValue.md#tobinary)
- [toJSON](QuestionnaireOptionGroupValue.md#tojson)
- [toJson](QuestionnaireOptionGroupValue.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupValue.md#tojsonstring)
- [equals](QuestionnaireOptionGroupValue.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupValue.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupValue.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupValue.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupValue**(`data?`): [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)\> |

#### Returns

[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupValue\&gt;.constructor

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:976

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:922

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:906

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:914

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:934

___

### questionnaireOptionGroupId

• **questionnaireOptionGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent questionnaire option group to which this specific value belongs.

**`Example`**

```ts
105
```

**`Generated`**

from field: uint64 questionnaire_option_group_id = 10;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:954

___

### sortOrder

• **sortOrder**: `bigint` = `protoInt64.zero`

**`Description`**

The numerical sequence determining the top-to-bottom or left-to-right display order of this specific value relative to other choices within the same option group.

**`Example`**

```ts
1
```

**`Generated`**

from field: uint64 sort_order = 12;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:974

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:944

___

### value

• **value**: `string` = `""`

**`Description`**

The actual text or string representing the specific answer choice presented to the user.

**`Example`**

```ts
"Highly Satisfied"
```

**`Generated`**

from field: string value = 11;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:964

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:983

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:981

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupValue"``

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:982

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1006

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:994

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:998

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupValue`](QuestionnaireOptionGroupValue.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1002
