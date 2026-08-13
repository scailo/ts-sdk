[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsServiceValueCreateRequest

# Class: QuestionnaireOptionGroupsServiceValueCreateRequest

Request message for defining and creating a new individual choice (value) within an existing Questionnaire Option Group.
This record represents a single distinct answer option (e.g., "Yes", "Highly Satisfied", "N/A")
that will be presented to users, explicitly mapping it to its parent group and dictating its display sequence.

**Note:** This is utilized by form designers when populating the specific, selectable choices
inside a standardized dropdown, radio button group, or rating scale.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsServiceValueCreateRequest

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)\>

  ↳ **`QuestionnaireOptionGroupsServiceValueCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsServiceValueCreateRequest.md#constructor)

### Properties

- [questionnaireOptionGroupId](QuestionnaireOptionGroupsServiceValueCreateRequest.md#questionnaireoptiongroupid)
- [sortOrder](QuestionnaireOptionGroupsServiceValueCreateRequest.md#sortorder)
- [userComment](QuestionnaireOptionGroupsServiceValueCreateRequest.md#usercomment)
- [value](QuestionnaireOptionGroupsServiceValueCreateRequest.md#value)
- [fields](QuestionnaireOptionGroupsServiceValueCreateRequest.md#fields)
- [runtime](QuestionnaireOptionGroupsServiceValueCreateRequest.md#runtime)
- [typeName](QuestionnaireOptionGroupsServiceValueCreateRequest.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsServiceValueCreateRequest.md#clone)
- [equals](QuestionnaireOptionGroupsServiceValueCreateRequest.md#equals)
- [fromBinary](QuestionnaireOptionGroupsServiceValueCreateRequest.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsServiceValueCreateRequest.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsServiceValueCreateRequest.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsServiceValueCreateRequest.md#gettype)
- [toBinary](QuestionnaireOptionGroupsServiceValueCreateRequest.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsServiceValueCreateRequest.md#tojson)
- [toJson](QuestionnaireOptionGroupsServiceValueCreateRequest.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsServiceValueCreateRequest.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsServiceValueCreateRequest.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsServiceValueCreateRequest.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsServiceValueCreateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsServiceValueCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsServiceValueCreateRequest**(`data?`): [`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)\> |

#### Returns

[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsServiceValueCreateRequest\&gt;.constructor

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:754

## Properties

### questionnaireOptionGroupId

• **questionnaireOptionGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent questionnaire option group to which this specific value belongs.

**`Example`**

```ts
105
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 questionnaire_option_group_id = 10;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:720

___

### sortOrder

• **sortOrder**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The numerical sequence determining the top-to-bottom or left-to-right display order of this specific value relative to other choices within the same option group.

**`Example`**

```ts
1
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sort_order = 12;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:752

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:704

___

### value

• **value**: `string` = `""`

**`Mandatory`**

**`Description`**

The actual text or string representing the specific answer choice presented to the user.

**`Example`**

```ts
"Highly Satisfied"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string value = 11;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:736

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:761

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:759

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsServiceValueCreateRequest"``

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:760

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:780

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:768

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:772

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceValueCreateRequest`](QuestionnaireOptionGroupsServiceValueCreateRequest.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:776
