[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SkillsParamsServiceCreateRequest

# Class: SkillsParamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.SkillsParamsServiceCreateRequest

## Hierarchy

- `Message`\<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\>

  ↳ **`SkillsParamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](SkillsParamsServiceCreateRequest.md#constructor)

### Properties

- [code](SkillsParamsServiceCreateRequest.md#code)
- [description](SkillsParamsServiceCreateRequest.md#description)
- [entityUuid](SkillsParamsServiceCreateRequest.md#entityuuid)
- [formData](SkillsParamsServiceCreateRequest.md#formdata)
- [name](SkillsParamsServiceCreateRequest.md#name)
- [userComment](SkillsParamsServiceCreateRequest.md#usercomment)
- [vaultFolderId](SkillsParamsServiceCreateRequest.md#vaultfolderid)
- [fields](SkillsParamsServiceCreateRequest.md#fields)
- [runtime](SkillsParamsServiceCreateRequest.md#runtime)
- [typeName](SkillsParamsServiceCreateRequest.md#typename)

### Methods

- [clone](SkillsParamsServiceCreateRequest.md#clone)
- [equals](SkillsParamsServiceCreateRequest.md#equals)
- [fromBinary](SkillsParamsServiceCreateRequest.md#frombinary)
- [fromJson](SkillsParamsServiceCreateRequest.md#fromjson)
- [fromJsonString](SkillsParamsServiceCreateRequest.md#fromjsonstring)
- [getType](SkillsParamsServiceCreateRequest.md#gettype)
- [toBinary](SkillsParamsServiceCreateRequest.md#tobinary)
- [toJSON](SkillsParamsServiceCreateRequest.md#tojson)
- [toJson](SkillsParamsServiceCreateRequest.md#tojson-1)
- [toJsonString](SkillsParamsServiceCreateRequest.md#tojsonstring)
- [equals](SkillsParamsServiceCreateRequest.md#equals-1)
- [fromBinary](SkillsParamsServiceCreateRequest.md#frombinary-1)
- [fromJson](SkillsParamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](SkillsParamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SkillsParamsServiceCreateRequest**(`data?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Overrides

Message\&lt;SkillsParamsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/skills_params.scailo_pb.ts:184](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L184)

## Properties

### code

• **code**: `string` = `""`

The skill param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/skills_params.scailo_pb.ts:161](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L161)

___

### description

• **description**: `string` = `""`

The description of the skill param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/skills_params.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L168)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/skills_params.scailo_pb.ts:115](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L115)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/skills_params.scailo_pb.ts:182](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L182)

___

### name

• **name**: `string` = `""`

The name of the skill param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/skills_params.scailo_pb.ts:154](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L154)

___

### userComment

• **userComment**: `string` = `""`

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

from field: string user_comment = 2;

#### Defined in

[src/skills_params.scailo_pb.ts:131](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L131)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/skills_params.scailo_pb.ts:147](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L147)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/skills_params.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L191)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/skills_params.scailo_pb.ts:189](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L189)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SkillsParamsServiceCreateRequest"``

#### Defined in

[src/skills_params.scailo_pb.ts:190](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L190)

## Methods

### clone

▸ **clone**(): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md) \| `PlainMessage`\<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md) \| `PlainMessage`\<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md) \| `PlainMessage`\<[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/skills_params.scailo_pb.ts:213](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L213)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Defined in

[src/skills_params.scailo_pb.ts:201](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L201)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Defined in

[src/skills_params.scailo_pb.ts:205](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L205)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SkillsParamsServiceCreateRequest`](SkillsParamsServiceCreateRequest.md)

#### Defined in

[src/skills_params.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/skills_params.scailo_pb.ts#L209)
