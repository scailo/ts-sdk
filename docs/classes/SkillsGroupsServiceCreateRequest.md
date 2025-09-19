[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsGroupsServiceCreateRequest

# Class: SkillsGroupsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.SkillsGroupsServiceCreateRequest

## Hierarchy

- `Message`\<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\>

  ↳ **`SkillsGroupsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsGroupsServiceCreateRequest.md#constructor)

### Properties

- [code](SkillsGroupsServiceCreateRequest.md#code)
- [description](SkillsGroupsServiceCreateRequest.md#description)
- [entityUuid](SkillsGroupsServiceCreateRequest.md#entityuuid)
- [formData](SkillsGroupsServiceCreateRequest.md#formdata)
- [name](SkillsGroupsServiceCreateRequest.md#name)
- [roleId](SkillsGroupsServiceCreateRequest.md#roleid)
- [userComment](SkillsGroupsServiceCreateRequest.md#usercomment)
- [vaultFolderId](SkillsGroupsServiceCreateRequest.md#vaultfolderid)
- [fields](SkillsGroupsServiceCreateRequest.md#fields)
- [runtime](SkillsGroupsServiceCreateRequest.md#runtime)
- [typeName](SkillsGroupsServiceCreateRequest.md#typename)

### Methods

- [clone](SkillsGroupsServiceCreateRequest.md#clone)
- [equals](SkillsGroupsServiceCreateRequest.md#equals)
- [fromBinary](SkillsGroupsServiceCreateRequest.md#frombinary)
- [fromJson](SkillsGroupsServiceCreateRequest.md#fromjson)
- [fromJsonString](SkillsGroupsServiceCreateRequest.md#fromjsonstring)
- [getType](SkillsGroupsServiceCreateRequest.md#gettype)
- [toBinary](SkillsGroupsServiceCreateRequest.md#tobinary)
- [toJSON](SkillsGroupsServiceCreateRequest.md#tojson)
- [toJson](SkillsGroupsServiceCreateRequest.md#tojson-1)
- [toJsonString](SkillsGroupsServiceCreateRequest.md#tojsonstring)
- [equals](SkillsGroupsServiceCreateRequest.md#equals-1)
- [fromBinary](SkillsGroupsServiceCreateRequest.md#frombinary-1)
- [fromJson](SkillsGroupsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SkillsGroupsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsGroupsServiceCreateRequest**(`data?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Overrides

Message\&lt;SkillsGroupsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/skills_groups.scailo_pb.ts:208](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L208)

## Properties

### code

• **code**: `string` = `""`

The skill group code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_groups.scailo_pb.ts:185](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L185)

___

### description

• **description**: `string` = `""`

The description of the skill group

**`Generated`**

from field: string description = 13;

#### Defined in

[src/skills_groups.scailo_pb.ts:199](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L199)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/skills_groups.scailo_pb.ts:157](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L157)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/skills_groups.scailo_pb.ts:206](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L206)

___

### name

• **name**: `string` = `""`

The name of the skill group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_groups.scailo_pb.ts:178](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L178)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The ID of the role that this skill group belongs to

**`Generated`**

from field: uint64 role_id = 12;

#### Defined in

[src/skills_groups.scailo_pb.ts:192](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L192)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/skills_groups.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L164)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/skills_groups.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L171)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_groups.scailo_pb.ts:215](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L215)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_groups.scailo_pb.ts:213](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L213)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsGroupsServiceCreateRequest"``

#### Defined in

[src/skills_groups.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L214)

## Methods

### clone

▸ **clone**(): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_groups.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L238)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:226](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L226)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L230)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsGroupsServiceCreateRequest`](SkillsGroupsServiceCreateRequest.md)

#### Defined in

[src/skills_groups.scailo_pb.ts:234](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L234)
