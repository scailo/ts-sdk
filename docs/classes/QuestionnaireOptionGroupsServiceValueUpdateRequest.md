[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsServiceValueUpdateRequest

# Class: QuestionnaireOptionGroupsServiceValueUpdateRequest

Request message for modifying an existing individual choice (value) within a Questionnaire Option Group.
This payload allows administrators or form designers to update the textual representation of an answer
choice or adjust its display sequence within the group without needing to recreate the entire option list.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsServiceValueUpdateRequest

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)\>

  ↳ **`QuestionnaireOptionGroupsServiceValueUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#constructor)

### Properties

- [id](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#id)
- [sortOrder](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#sortorder)
- [userComment](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#usercomment)
- [value](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#value)
- [fields](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#fields)
- [runtime](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#runtime)
- [typeName](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#clone)
- [equals](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#equals)
- [fromBinary](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#gettype)
- [toBinary](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#tojson)
- [toJson](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsServiceValueUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsServiceValueUpdateRequest**(`data?`): [`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)\> |

#### Returns

[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsServiceValueUpdateRequest\&gt;.constructor

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:858](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L858)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:824](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L824)

___

### sortOrder

• **sortOrder**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated numerical sequence determining the top-to-bottom or left-to-right display order of this specific value relative to other choices within the same option group.

**`Example`**

```ts
2
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sort_order = 12;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L856)

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

[src/questionnaire_option_groups.scailo_pb.ts:808](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L808)

___

### value

• **value**: `string` = `""`

**`Mandatory`**

**`Description`**

The updated text or string representing the specific answer choice presented to the user.

**`Example`**

```ts
"Somewhat Satisfied"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string value = 11;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:840](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L840)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L865)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L863)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsServiceValueUpdateRequest"``

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L864)

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:884](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L884)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L872)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L876)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServiceValueUpdateRequest`](QuestionnaireOptionGroupsServiceValueUpdateRequest.md)

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L880)
