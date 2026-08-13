[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceCreateRequest

# Class: TeamsServiceCreateRequest

Request message for defining and creating a new Team profile within the organizational structure.
This record tracks critical group metadata, unique internal alphanumeric identifiers,
operational descriptions, and leadership assignments.

**Note:** This is the primary entry point for HR or Organization Administrators
to register new functional groups, squads, or departments to facilitate access control,
task assignment, and workflow routing.

**`Generated`**

from message Scailo.TeamsServiceCreateRequest

## Hierarchy

- `Message`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\>

  ↳ **`TeamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](TeamsServiceCreateRequest.md#constructor)

### Properties

- [code](TeamsServiceCreateRequest.md#code)
- [description](TeamsServiceCreateRequest.md#description)
- [entityUuid](TeamsServiceCreateRequest.md#entityuuid)
- [leadUserId](TeamsServiceCreateRequest.md#leaduserid)
- [name](TeamsServiceCreateRequest.md#name)
- [userComment](TeamsServiceCreateRequest.md#usercomment)
- [vaultFolderId](TeamsServiceCreateRequest.md#vaultfolderid)
- [fields](TeamsServiceCreateRequest.md#fields)
- [runtime](TeamsServiceCreateRequest.md#runtime)
- [typeName](TeamsServiceCreateRequest.md#typename)

### Methods

- [clone](TeamsServiceCreateRequest.md#clone)
- [equals](TeamsServiceCreateRequest.md#equals)
- [fromBinary](TeamsServiceCreateRequest.md#frombinary)
- [fromJson](TeamsServiceCreateRequest.md#fromjson)
- [fromJsonString](TeamsServiceCreateRequest.md#fromjsonstring)
- [getType](TeamsServiceCreateRequest.md#gettype)
- [toBinary](TeamsServiceCreateRequest.md#tobinary)
- [toJSON](TeamsServiceCreateRequest.md#tojson)
- [toJson](TeamsServiceCreateRequest.md#tojson-1)
- [toJsonString](TeamsServiceCreateRequest.md#tojsonstring)
- [equals](TeamsServiceCreateRequest.md#equals-1)
- [fromBinary](TeamsServiceCreateRequest.md#frombinary-1)
- [fromJson](TeamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](TeamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceCreateRequest**(`data?`): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\> |

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Overrides

Message\&lt;TeamsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:336](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L336)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the team.

**`Example`**

```ts
"ENG-CORE-01"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/teams.scailo_pb.ts:302](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L302)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

A detailed text description outlining the purpose, responsibilities, and scope of the team.

**`Example`**

```ts
"Responsible for maintaining backend microservices and core API infrastructure."
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string description = 13;

#### Defined in

[src/teams.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L334)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 1;

#### Defined in

[src/teams.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L238)

___

### leadUserId

• **leadUserId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the user designated as the team lead or manager for this group.

**`Example`**

```ts
402
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 lead_user_id = 12;

#### Defined in

[src/teams.scailo_pb.ts:318](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L318)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary, human-readable name of the team.

**`Example`**

```ts
"Core Backend Engineering"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/teams.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L286)

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

from field: optional string user_comment = 2;

#### Defined in

[src/teams.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L254)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

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

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/teams.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L270)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L343)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:341](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L341)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceCreateRequest"``

#### Defined in

[src/teams.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L342)

## Methods

### clone

▸ **clone**(): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md) \| `PlainMessage`\<[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:365](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L365)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L353)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L357)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceCreateRequest`](TeamsServiceCreateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/teams.scailo_pb.ts#L361)
