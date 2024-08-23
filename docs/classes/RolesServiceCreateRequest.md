[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceCreateRequest

# Class: RolesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.RolesServiceCreateRequest

## Hierarchy

- `Message`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

  ↳ **`RolesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](RolesServiceCreateRequest.md#constructor)

### Properties

- [accessList](RolesServiceCreateRequest.md#accesslist)
- [code](RolesServiceCreateRequest.md#code)
- [description](RolesServiceCreateRequest.md#description)
- [entityUuid](RolesServiceCreateRequest.md#entityuuid)
- [httpAccess](RolesServiceCreateRequest.md#httpaccess)
- [httpsAccess](RolesServiceCreateRequest.md#httpsaccess)
- [name](RolesServiceCreateRequest.md#name)
- [userComment](RolesServiceCreateRequest.md#usercomment)
- [vaultAccess](RolesServiceCreateRequest.md#vaultaccess)
- [vaultRootFolderInteractions](RolesServiceCreateRequest.md#vaultrootfolderinteractions)
- [fields](RolesServiceCreateRequest.md#fields)
- [runtime](RolesServiceCreateRequest.md#runtime)
- [typeName](RolesServiceCreateRequest.md#typename)

### Methods

- [clone](RolesServiceCreateRequest.md#clone)
- [equals](RolesServiceCreateRequest.md#equals)
- [fromBinary](RolesServiceCreateRequest.md#frombinary)
- [fromJson](RolesServiceCreateRequest.md#fromjson)
- [fromJsonString](RolesServiceCreateRequest.md#fromjsonstring)
- [getType](RolesServiceCreateRequest.md#gettype)
- [toBinary](RolesServiceCreateRequest.md#tobinary)
- [toJSON](RolesServiceCreateRequest.md#tojson)
- [toJson](RolesServiceCreateRequest.md#tojson-1)
- [toJsonString](RolesServiceCreateRequest.md#tojsonstring)
- [equals](RolesServiceCreateRequest.md#equals-1)
- [fromBinary](RolesServiceCreateRequest.md#frombinary-1)
- [fromJson](RolesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](RolesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceCreateRequest**(`data?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Overrides

Message\&lt;RolesServiceCreateRequest\&gt;.constructor

#### Defined in

src/roles.scailo_pb.ts:170

## Properties

### accessList

• **accessList**: [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)[] = `[]`

The list of accessible menu UIDs

**`Generated`**

from field: repeated Scailo.RolesServiceAccessCreateAndUpdateRequest access_list = 20;

#### Defined in

src/roles.scailo_pb.ts:168

___

### code

• **code**: `string` = `""`

The code of the role

**`Generated`**

from field: string code = 11;

#### Defined in

src/roles.scailo_pb.ts:126

___

### description

• **description**: `string` = `""`

The description of the role

**`Generated`**

from field: string description = 12;

#### Defined in

src/roles.scailo_pb.ts:133

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/roles.scailo_pb.ts:105

___

### httpAccess

• **httpAccess**: `boolean` = `false`

Stores if the role has access via HTTP (or within local network)

**`Generated`**

from field: bool http_access = 15;

#### Defined in

src/roles.scailo_pb.ts:154

___

### httpsAccess

• **httpsAccess**: `boolean` = `false`

Stores if the role has access via HTTPS (or through a public FQDN)

**`Generated`**

from field: bool https_access = 16;

#### Defined in

src/roles.scailo_pb.ts:161

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 10;

#### Defined in

src/roles.scailo_pb.ts:119

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/roles.scailo_pb.ts:112

___

### vaultAccess

• **vaultAccess**: `boolean` = `false`

Stores if this role has access to Vault

**`Generated`**

from field: bool vault_access = 13;

#### Defined in

src/roles.scailo_pb.ts:140

___

### vaultRootFolderInteractions

• **vaultRootFolderInteractions**: `boolean` = `false`

Stores if the role has access to perform operations on the root folder in Vault

**`Generated`**

from field: bool vault_root_folder_interactions = 14;

#### Defined in

src/roles.scailo_pb.ts:147

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/roles.scailo_pb.ts:177

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/roles.scailo_pb.ts:175

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceCreateRequest"``

#### Defined in

src/roles.scailo_pb.ts:176

## Methods

### clone

▸ **clone**(): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md) \| `PlainMessage`\<[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/roles.scailo_pb.ts:202

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

src/roles.scailo_pb.ts:190

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

src/roles.scailo_pb.ts:194

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceCreateRequest`](RolesServiceCreateRequest.md)

#### Defined in

src/roles.scailo_pb.ts:198
