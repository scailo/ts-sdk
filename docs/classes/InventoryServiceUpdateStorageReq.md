[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InventoryServiceUpdateStorageReq

# Class: InventoryServiceUpdateStorageReq

Describes the payload necessary to either update the storage or to move an inventory item to a new storage

**`Generated`**

from message Scailo.InventoryServiceUpdateStorageReq

## Hierarchy

- `Message`\<[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)\>

  ↳ **`InventoryServiceUpdateStorageReq`**

## Table of contents

### Constructors

- [constructor](InventoryServiceUpdateStorageReq.md#constructor)

### Properties

- [searchKey](InventoryServiceUpdateStorageReq.md#searchkey)
- [storageUuid](InventoryServiceUpdateStorageReq.md#storageuuid)
- [fields](InventoryServiceUpdateStorageReq.md#fields)
- [runtime](InventoryServiceUpdateStorageReq.md#runtime)
- [typeName](InventoryServiceUpdateStorageReq.md#typename)

### Methods

- [clone](InventoryServiceUpdateStorageReq.md#clone)
- [equals](InventoryServiceUpdateStorageReq.md#equals)
- [fromBinary](InventoryServiceUpdateStorageReq.md#frombinary)
- [fromJson](InventoryServiceUpdateStorageReq.md#fromjson)
- [fromJsonString](InventoryServiceUpdateStorageReq.md#fromjsonstring)
- [getType](InventoryServiceUpdateStorageReq.md#gettype)
- [toBinary](InventoryServiceUpdateStorageReq.md#tobinary)
- [toJSON](InventoryServiceUpdateStorageReq.md#tojson)
- [toJson](InventoryServiceUpdateStorageReq.md#tojson-1)
- [toJsonString](InventoryServiceUpdateStorageReq.md#tojsonstring)
- [equals](InventoryServiceUpdateStorageReq.md#equals-1)
- [fromBinary](InventoryServiceUpdateStorageReq.md#frombinary-1)
- [fromJson](InventoryServiceUpdateStorageReq.md#fromjson-1)
- [fromJsonString](InventoryServiceUpdateStorageReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InventoryServiceUpdateStorageReq**(`data?`): [`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)\> |

#### Returns

[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

#### Overrides

Message\&lt;InventoryServiceUpdateStorageReq\&gt;.constructor

#### Defined in

[src/inventory.scailo_pb.ts:2456](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2456)

## Properties

### searchKey

• **searchKey**: `string` = `""`

The item code or the short URL that could be used to uniquely identify an inventory item

**`Generated`**

from field: string search_key = 1;

#### Defined in

[src/inventory.scailo_pb.ts:2447](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2447)

___

### storageUuid

• **storageUuid**: `string` = `""`

The UUID of the destination storage where the inventory item needs to be moved into

**`Generated`**

from field: string storage_uuid = 2;

#### Defined in

[src/inventory.scailo_pb.ts:2454](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2454)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inventory.scailo_pb.ts:2463](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2463)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inventory.scailo_pb.ts:2461](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2461)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InventoryServiceUpdateStorageReq"``

#### Defined in

[src/inventory.scailo_pb.ts:2462](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2462)

## Methods

### clone

▸ **clone**(): [`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

Create a deep copy.

#### Returns

[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md) \| `PlainMessage`\<[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)\>

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
| `a` | `undefined` \| [`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md) \| `PlainMessage`\<[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)\> |
| `b` | `undefined` \| [`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md) \| `PlainMessage`\<[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inventory.scailo_pb.ts:2480](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2480)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:2468](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2468)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:2472](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2472)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InventoryServiceUpdateStorageReq`](InventoryServiceUpdateStorageReq.md)

#### Defined in

[src/inventory.scailo_pb.ts:2476](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/inventory.scailo_pb.ts#L2476)
