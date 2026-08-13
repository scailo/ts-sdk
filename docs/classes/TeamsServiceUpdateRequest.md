[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceUpdateRequest

# Class: TeamsServiceUpdateRequest

Request message for updating an existing Team record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, code, lead user id, and description
of an established Team.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.TeamsServiceUpdateRequest

## Hierarchy

- `Message`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\>

  ↳ **`TeamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](TeamsServiceUpdateRequest.md#constructor)

### Properties

- [code](TeamsServiceUpdateRequest.md#code)
- [description](TeamsServiceUpdateRequest.md#description)
- [id](TeamsServiceUpdateRequest.md#id)
- [leadUserId](TeamsServiceUpdateRequest.md#leaduserid)
- [name](TeamsServiceUpdateRequest.md#name)
- [notifyUsers](TeamsServiceUpdateRequest.md#notifyusers)
- [userComment](TeamsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](TeamsServiceUpdateRequest.md#vaultfolderid)
- [fields](TeamsServiceUpdateRequest.md#fields)
- [runtime](TeamsServiceUpdateRequest.md#runtime)
- [typeName](TeamsServiceUpdateRequest.md#typename)

### Methods

- [clone](TeamsServiceUpdateRequest.md#clone)
- [equals](TeamsServiceUpdateRequest.md#equals)
- [fromBinary](TeamsServiceUpdateRequest.md#frombinary)
- [fromJson](TeamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](TeamsServiceUpdateRequest.md#fromjsonstring)
- [getType](TeamsServiceUpdateRequest.md#gettype)
- [toBinary](TeamsServiceUpdateRequest.md#tobinary)
- [toJSON](TeamsServiceUpdateRequest.md#tojson)
- [toJson](TeamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](TeamsServiceUpdateRequest.md#tojsonstring)
- [equals](TeamsServiceUpdateRequest.md#equals-1)
- [fromBinary](TeamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](TeamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](TeamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceUpdateRequest**(`data?`): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\> |

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Overrides

Message\&lt;TeamsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:507](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L507)

## Properties

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the team.

**`Example`**

```ts
"ENG-CORE-01"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

[src/teams.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L473)

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

[src/teams.scailo_pb.ts:505](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L505)

___

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

[src/teams.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L413)

___

### leadUserId

• `Optional` **leadUserId**: `bigint`

**`Optional`**

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

from field: optional uint64 lead_user_id = 12;

#### Defined in

[src/teams.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L489)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The primary, human-readable name of the team.

**`Example`**

```ts
"Core Backend Engineering"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/teams.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L457)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/teams.scailo_pb.ts:425](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L425)

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

[src/teams.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L397)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

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

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/teams.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L441)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L514)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L512)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceUpdateRequest"``

#### Defined in

[src/teams.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L513)

## Methods

### clone

▸ **clone**(): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L537)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L525)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L529)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceUpdateRequest`](TeamsServiceUpdateRequest.md)

#### Defined in

[src/teams.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L533)
