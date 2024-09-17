[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsServiceUpdateRequest

# Class: SkillsParamsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SkillsParamsServiceUpdateRequest

## Hierarchy

- `Message`\<[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)\>

  ↳ **`SkillsParamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsParamsServiceUpdateRequest.md#constructor)

### Properties

- [code](SkillsParamsServiceUpdateRequest.md#code)
- [description](SkillsParamsServiceUpdateRequest.md#description)
- [formData](SkillsParamsServiceUpdateRequest.md#formdata)
- [id](SkillsParamsServiceUpdateRequest.md#id)
- [name](SkillsParamsServiceUpdateRequest.md#name)
- [notifyUsers](SkillsParamsServiceUpdateRequest.md#notifyusers)
- [userComment](SkillsParamsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SkillsParamsServiceUpdateRequest.md#vaultfolderid)
- [fields](SkillsParamsServiceUpdateRequest.md#fields)
- [runtime](SkillsParamsServiceUpdateRequest.md#runtime)
- [typeName](SkillsParamsServiceUpdateRequest.md#typename)

### Methods

- [clone](SkillsParamsServiceUpdateRequest.md#clone)
- [equals](SkillsParamsServiceUpdateRequest.md#equals)
- [fromBinary](SkillsParamsServiceUpdateRequest.md#frombinary)
- [fromJson](SkillsParamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](SkillsParamsServiceUpdateRequest.md#fromjsonstring)
- [getType](SkillsParamsServiceUpdateRequest.md#gettype)
- [toBinary](SkillsParamsServiceUpdateRequest.md#tobinary)
- [toJSON](SkillsParamsServiceUpdateRequest.md#tojson)
- [toJson](SkillsParamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](SkillsParamsServiceUpdateRequest.md#tojsonstring)
- [equals](SkillsParamsServiceUpdateRequest.md#equals-1)
- [fromBinary](SkillsParamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](SkillsParamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SkillsParamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsServiceUpdateRequest**(`data?`): [`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)\> |

#### Returns

[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

#### Overrides

Message\&lt;SkillsParamsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/skills_params.scailo_pb.ts:247

## Properties

### code

• **code**: `string` = `""`

The skill param code

**`Generated`**

from field: string code = 11;

#### Defined in

src/skills_params.scailo_pb.ts:231

___

### description

• **description**: `string` = `""`

The description of the skill param

**`Generated`**

from field: string description = 12;

#### Defined in

src/skills_params.scailo_pb.ts:238

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/skills_params.scailo_pb.ts:245

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/skills_params.scailo_pb.ts:203

___

### name

• **name**: `string` = `""`

The name of the skill param

**`Generated`**

from field: string name = 10;

#### Defined in

src/skills_params.scailo_pb.ts:224

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/skills_params.scailo_pb.ts:210

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/skills_params.scailo_pb.ts:196

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/skills_params.scailo_pb.ts:217

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/skills_params.scailo_pb.ts:254

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/skills_params.scailo_pb.ts:252

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsParamsServiceUpdateRequest"``

#### Defined in

src/skills_params.scailo_pb.ts:253

## Methods

### clone

▸ **clone**(): [`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/skills_params.scailo_pb.ts:277

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

#### Defined in

src/skills_params.scailo_pb.ts:265

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

#### Defined in

src/skills_params.scailo_pb.ts:269

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceUpdateRequest`](SkillsParamsServiceUpdateRequest.md)

#### Defined in

src/skills_params.scailo_pb.ts:273
