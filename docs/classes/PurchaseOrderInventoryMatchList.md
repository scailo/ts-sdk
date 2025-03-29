[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderInventoryMatchList

# Class: PurchaseOrderInventoryMatchList

Describes the list of inventory match families

**`Generated`**

from message Scailo.PurchaseOrderInventoryMatchList

## Hierarchy

- `Message`\<[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)\>

  ↳ **`PurchaseOrderInventoryMatchList`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderInventoryMatchList.md#constructor)

### Properties

- [list](PurchaseOrderInventoryMatchList.md#list)
- [fields](PurchaseOrderInventoryMatchList.md#fields)
- [runtime](PurchaseOrderInventoryMatchList.md#runtime)
- [typeName](PurchaseOrderInventoryMatchList.md#typename)

### Methods

- [clone](PurchaseOrderInventoryMatchList.md#clone)
- [equals](PurchaseOrderInventoryMatchList.md#equals)
- [fromBinary](PurchaseOrderInventoryMatchList.md#frombinary)
- [fromJson](PurchaseOrderInventoryMatchList.md#fromjson)
- [fromJsonString](PurchaseOrderInventoryMatchList.md#fromjsonstring)
- [getType](PurchaseOrderInventoryMatchList.md#gettype)
- [toBinary](PurchaseOrderInventoryMatchList.md#tobinary)
- [toJSON](PurchaseOrderInventoryMatchList.md#tojson)
- [toJson](PurchaseOrderInventoryMatchList.md#tojson-1)
- [toJsonString](PurchaseOrderInventoryMatchList.md#tojsonstring)
- [equals](PurchaseOrderInventoryMatchList.md#equals-1)
- [fromBinary](PurchaseOrderInventoryMatchList.md#frombinary-1)
- [fromJson](PurchaseOrderInventoryMatchList.md#fromjson-1)
- [fromJsonString](PurchaseOrderInventoryMatchList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderInventoryMatchList**(`data?`): [`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)\> |

#### Returns

[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

#### Overrides

Message\&lt;PurchaseOrderInventoryMatchList\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:3431

## Properties

### list

• **list**: [`PurchaseOrderInventoryMatch`](PurchaseOrderInventoryMatch.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseOrderInventoryMatch list = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:3429

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:3438

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:3436

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderInventoryMatchList"``

#### Defined in

src/purchases_orders.scailo_pb.ts:3437

## Methods

### clone

▸ **clone**(): [`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

Create a deep copy.

#### Returns

[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)\> |
| `b` | `undefined` \| [`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md) \| `PlainMessage`\<[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:3454

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3442

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3446

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderInventoryMatchList`](PurchaseOrderInventoryMatchList.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:3450
