[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EnclaveDomain

# Class: EnclaveDomain

Denotes an individual domain that is part of an enclave

**`Generated`**

from message Scailo.EnclaveDomain

## Hierarchy

- `Message`\<[`EnclaveDomain`](EnclaveDomain.md)\>

  ↳ **`EnclaveDomain`**

## Table of contents

### Constructors

- [constructor](EnclaveDomain.md#constructor)

### Properties

- [domain](EnclaveDomain.md#domain)
- [entityUuid](EnclaveDomain.md#entityuuid)
- [metadata](EnclaveDomain.md#metadata)
- [serviceAddr](EnclaveDomain.md#serviceaddr)
- [vaultFileId](EnclaveDomain.md#vaultfileid)
- [fields](EnclaveDomain.md#fields)
- [runtime](EnclaveDomain.md#runtime)
- [typeName](EnclaveDomain.md#typename)

### Methods

- [clone](EnclaveDomain.md#clone)
- [equals](EnclaveDomain.md#equals)
- [fromBinary](EnclaveDomain.md#frombinary)
- [fromJson](EnclaveDomain.md#fromjson)
- [fromJsonString](EnclaveDomain.md#fromjsonstring)
- [getType](EnclaveDomain.md#gettype)
- [toBinary](EnclaveDomain.md#tobinary)
- [toJSON](EnclaveDomain.md#tojson)
- [toJson](EnclaveDomain.md#tojson-1)
- [toJsonString](EnclaveDomain.md#tojsonstring)
- [equals](EnclaveDomain.md#equals-1)
- [fromBinary](EnclaveDomain.md#frombinary-1)
- [fromJson](EnclaveDomain.md#fromjson-1)
- [fromJsonString](EnclaveDomain.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnclaveDomain**(`data?`): [`EnclaveDomain`](EnclaveDomain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EnclaveDomain`](EnclaveDomain.md)\> |

#### Returns

[`EnclaveDomain`](EnclaveDomain.md)

#### Overrides

Message\&lt;EnclaveDomain\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:2131](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2131)

## Properties

### domain

• **domain**: `string` = `""`

The domain that points to the enclave

**`Generated`**

from field: string domain = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:2122](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2122)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:2101](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2101)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:2108](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2108)

___

### serviceAddr

• **serviceAddr**: `string` = `""`

The internal address of the service that the domain points to

**`Generated`**

from field: string service_addr = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2129)

___

### vaultFileId

• **vaultFileId**: `bigint` = `protoInt64.zero`

Stores the ID of the file that the domain belongs to

**`Generated`**

from field: uint64 vault_file_id = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:2115](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2115)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:2138](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2138)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:2136](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2136)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EnclaveDomain"``

#### Defined in

[src/vault_commons.scailo_pb.ts:2137](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2137)

## Methods

### clone

▸ **clone**(): [`EnclaveDomain`](EnclaveDomain.md)

Create a deep copy.

#### Returns

[`EnclaveDomain`](EnclaveDomain.md)

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
| `other` | `undefined` \| ``null`` \| [`EnclaveDomain`](EnclaveDomain.md) \| `PlainMessage`\<[`EnclaveDomain`](EnclaveDomain.md)\> |

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

▸ **getType**(): `MessageType`\<[`EnclaveDomain`](EnclaveDomain.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EnclaveDomain`](EnclaveDomain.md)\>

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
| `a` | `undefined` \| [`EnclaveDomain`](EnclaveDomain.md) \| `PlainMessage`\<[`EnclaveDomain`](EnclaveDomain.md)\> |
| `b` | `undefined` \| [`EnclaveDomain`](EnclaveDomain.md) \| `PlainMessage`\<[`EnclaveDomain`](EnclaveDomain.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:2158](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2158)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnclaveDomain`](EnclaveDomain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EnclaveDomain`](EnclaveDomain.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2146](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2146)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnclaveDomain`](EnclaveDomain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomain`](EnclaveDomain.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2150](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2150)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnclaveDomain`](EnclaveDomain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EnclaveDomain`](EnclaveDomain.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:2154](https://github.com/scailo/ts-sdk/blob/af96b25d02eecd3a053974bf3005c64869ec737d/src/vault_commons.scailo_pb.ts#L2154)
