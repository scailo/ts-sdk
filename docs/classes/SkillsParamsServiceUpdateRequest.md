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

[src/skills_params.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L279)

## Properties

### code

• **code**: `string` = `""`

The skill param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_params.scailo_pb.ts:263](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L263)

___

### description

• **description**: `string` = `""`

The description of the skill param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/skills_params.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L270)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/skills_params.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L277)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/skills_params.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L221)

___

### name

• **name**: `string` = `""`

The name of the skill param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_params.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L256)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/skills_params.scailo_pb.ts:233](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L233)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/skills_params.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L214)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/skills_params.scailo_pb.ts:249](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L249)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L286)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L284)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsParamsServiceUpdateRequest"``

#### Defined in

[src/skills_params.scailo_pb.ts:285](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L285)

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

[src/skills_params.scailo_pb.ts:309](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L309)

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

[src/skills_params.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L297)

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

[src/skills_params.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L301)

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

[src/skills_params.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/skills_params.scailo_pb.ts#L305)
