[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultPermission

# Class: VaultPermission

Describes the parameters of a permission related to a vault file or folder

**`Generated`**

from message Scailo.VaultPermission

## Hierarchy

- `Message`\<[`VaultPermission`](VaultPermission.md)\>

  ↳ **`VaultPermission`**

## Table of contents

### Constructors

- [constructor](VaultPermission.md#constructor)

### Properties

- [entityUuid](VaultPermission.md#entityuuid)
- [metadata](VaultPermission.md#metadata)
- [permissionCode](VaultPermission.md#permissioncode)
- [refFor](VaultPermission.md#reffor)
- [refId](VaultPermission.md#refid)
- [roleId](VaultPermission.md#roleid)
- [fields](VaultPermission.md#fields)
- [runtime](VaultPermission.md#runtime)
- [typeName](VaultPermission.md#typename)

### Methods

- [clone](VaultPermission.md#clone)
- [equals](VaultPermission.md#equals)
- [fromBinary](VaultPermission.md#frombinary)
- [fromJson](VaultPermission.md#fromjson)
- [fromJsonString](VaultPermission.md#fromjsonstring)
- [getType](VaultPermission.md#gettype)
- [toBinary](VaultPermission.md#tobinary)
- [toJSON](VaultPermission.md#tojson)
- [toJson](VaultPermission.md#tojson-1)
- [toJsonString](VaultPermission.md#tojsonstring)
- [equals](VaultPermission.md#equals-1)
- [fromBinary](VaultPermission.md#frombinary-1)
- [fromJson](VaultPermission.md#fromjson-1)
- [fromJsonString](VaultPermission.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultPermission**(`data?`): [`VaultPermission`](VaultPermission.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultPermission`](VaultPermission.md)\> |

#### Returns

[`VaultPermission`](VaultPermission.md)

#### Overrides

Message\&lt;VaultPermission\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:303

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:266

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vault_commons.scailo_pb.ts:273

___

### permissionCode

• **permissionCode**: `bigint` = `protoInt64.zero`

Stores the applicable permissions

**`Generated`**

from field: uint64 permission_code = 13;

#### Defined in

src/vault_commons.scailo_pb.ts:301

___

### refFor

• **refFor**: [`VAULT_REF_FOR`](../enums/VAULT_REF_FOR.md) = `VAULT_REF_FOR.VAULT_REF_FOR_ANY_UNSPECIFIED`

Stores the reference for which this permission is applicable

**`Generated`**

from field: Scailo.VAULT_REF_FOR ref_for = 10;

#### Defined in

src/vault_commons.scailo_pb.ts:280

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the underlying file or folder that this permission if applicable for

**`Generated`**

from field: uint64 ref_id = 11;

#### Defined in

src/vault_commons.scailo_pb.ts:287

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

Stores the ID of the role

**`Generated`**

from field: uint64 role_id = 12;

#### Defined in

src/vault_commons.scailo_pb.ts:294

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:310

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:308

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultPermission"``

#### Defined in

src/vault_commons.scailo_pb.ts:309

## Methods

### clone

▸ **clone**(): [`VaultPermission`](VaultPermission.md)

Create a deep copy.

#### Returns

[`VaultPermission`](VaultPermission.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultPermission`](VaultPermission.md) \| `PlainMessage`\<[`VaultPermission`](VaultPermission.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultPermission`](VaultPermission.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultPermission`](VaultPermission.md)\>

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
| `a` | `undefined` \| [`VaultPermission`](VaultPermission.md) \| `PlainMessage`\<[`VaultPermission`](VaultPermission.md)\> |
| `b` | `undefined` \| [`VaultPermission`](VaultPermission.md) \| `PlainMessage`\<[`VaultPermission`](VaultPermission.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:331

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultPermission`](VaultPermission.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultPermission`](VaultPermission.md)

#### Defined in

src/vault_commons.scailo_pb.ts:319

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultPermission`](VaultPermission.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultPermission`](VaultPermission.md)

#### Defined in

src/vault_commons.scailo_pb.ts:323

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultPermission`](VaultPermission.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultPermission`](VaultPermission.md)

#### Defined in

src/vault_commons.scailo_pb.ts:327
