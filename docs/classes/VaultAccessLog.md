[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultAccessLog

# Class: VaultAccessLog

Describes the access log of every file or folder

**`Generated`**

from message Scailo.VaultAccessLog

## Hierarchy

- `Message`\<[`VaultAccessLog`](VaultAccessLog.md)\>

  ↳ **`VaultAccessLog`**

## Table of contents

### Constructors

- [constructor](VaultAccessLog.md#constructor)

### Properties

- [comment](VaultAccessLog.md#comment)
- [entityUuid](VaultAccessLog.md#entityuuid)
- [ipAddr](VaultAccessLog.md#ipaddr)
- [metadata](VaultAccessLog.md#metadata)
- [operation](VaultAccessLog.md#operation)
- [refFor](VaultAccessLog.md#reffor)
- [refId](VaultAccessLog.md#refid)
- [username](VaultAccessLog.md#username)
- [fields](VaultAccessLog.md#fields)
- [runtime](VaultAccessLog.md#runtime)
- [typeName](VaultAccessLog.md#typename)

### Methods

- [clone](VaultAccessLog.md#clone)
- [equals](VaultAccessLog.md#equals)
- [fromBinary](VaultAccessLog.md#frombinary)
- [fromJson](VaultAccessLog.md#fromjson)
- [fromJsonString](VaultAccessLog.md#fromjsonstring)
- [getType](VaultAccessLog.md#gettype)
- [toBinary](VaultAccessLog.md#tobinary)
- [toJSON](VaultAccessLog.md#tojson)
- [toJson](VaultAccessLog.md#tojson-1)
- [toJsonString](VaultAccessLog.md#tojsonstring)
- [equals](VaultAccessLog.md#equals-1)
- [fromBinary](VaultAccessLog.md#frombinary-1)
- [fromJson](VaultAccessLog.md#fromjson-1)
- [fromJsonString](VaultAccessLog.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultAccessLog**(`data?`): [`VaultAccessLog`](VaultAccessLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultAccessLog`](VaultAccessLog.md)\> |

#### Returns

[`VaultAccessLog`](VaultAccessLog.md)

#### Overrides

Message\&lt;VaultAccessLog\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:1381

## Properties

### comment

• **comment**: `string` = `""`

Stores the comment that describes the operation

**`Generated`**

from field: string comment = 15;

#### Defined in

src/vault_commons.scailo_pb.ts:1379

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:1330

___

### ipAddr

• **ipAddr**: `string` = `""`

Stores the IP address from where the resource was accessed

**`Generated`**

from field: string ip_addr = 13;

#### Defined in

src/vault_commons.scailo_pb.ts:1365

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vault_commons.scailo_pb.ts:1337

___

### operation

• **operation**: [`VAULT_ACCESS_LOG_OPERATION`](../enums/VAULT_ACCESS_LOG_OPERATION.md) = `VAULT_ACCESS_LOG_OPERATION.VAULT_ACCESS_LOG_OPERATION_ANY_UNSPECIFIED`

Stores the operation that was performed (Add/Move/Rename/Delete/Download)

**`Generated`**

from field: Scailo.VAULT_ACCESS_LOG_OPERATION operation = 14;

#### Defined in

src/vault_commons.scailo_pb.ts:1372

___

### refFor

• **refFor**: [`VAULT_REF_FOR`](../enums/VAULT_REF_FOR.md) = `VAULT_REF_FOR.VAULT_REF_FOR_ANY_UNSPECIFIED`

Stores the reference for which this access log is applicable

**`Generated`**

from field: Scailo.VAULT_REF_FOR ref_for = 10;

#### Defined in

src/vault_commons.scailo_pb.ts:1344

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the underlying file or folder that has been accessed

**`Generated`**

from field: uint64 ref_id = 11;

#### Defined in

src/vault_commons.scailo_pb.ts:1351

___

### username

• **username**: `string` = `""`

Stores the username of the user who accessed this resource

**`Generated`**

from field: string username = 12;

#### Defined in

src/vault_commons.scailo_pb.ts:1358

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:1388

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:1386

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultAccessLog"``

#### Defined in

src/vault_commons.scailo_pb.ts:1387

## Methods

### clone

▸ **clone**(): [`VaultAccessLog`](VaultAccessLog.md)

Create a deep copy.

#### Returns

[`VaultAccessLog`](VaultAccessLog.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultAccessLog`](VaultAccessLog.md) \| `PlainMessage`\<[`VaultAccessLog`](VaultAccessLog.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultAccessLog`](VaultAccessLog.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultAccessLog`](VaultAccessLog.md)\>

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
| `a` | `undefined` \| [`VaultAccessLog`](VaultAccessLog.md) \| `PlainMessage`\<[`VaultAccessLog`](VaultAccessLog.md)\> |
| `b` | `undefined` \| [`VaultAccessLog`](VaultAccessLog.md) \| `PlainMessage`\<[`VaultAccessLog`](VaultAccessLog.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:1411

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultAccessLog`](VaultAccessLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultAccessLog`](VaultAccessLog.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1399

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultAccessLog`](VaultAccessLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultAccessLog`](VaultAccessLog.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1403

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultAccessLog`](VaultAccessLog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultAccessLog`](VaultAccessLog.md)

#### Defined in

src/vault_commons.scailo_pb.ts:1407
