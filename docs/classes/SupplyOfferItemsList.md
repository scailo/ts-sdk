[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOfferItemsList

# Class: SupplyOfferItemsList

Describes the message consisting of the list of supply offer items

**`Generated`**

from message Scailo.SupplyOfferItemsList

## Hierarchy

- `Message`\<[`SupplyOfferItemsList`](SupplyOfferItemsList.md)\>

  ↳ **`SupplyOfferItemsList`**

## Table of contents

### Constructors

- [constructor](SupplyOfferItemsList.md#constructor)

### Properties

- [list](SupplyOfferItemsList.md#list)
- [fields](SupplyOfferItemsList.md#fields)
- [runtime](SupplyOfferItemsList.md#runtime)
- [typeName](SupplyOfferItemsList.md#typename)

### Methods

- [clone](SupplyOfferItemsList.md#clone)
- [equals](SupplyOfferItemsList.md#equals)
- [fromBinary](SupplyOfferItemsList.md#frombinary)
- [fromJson](SupplyOfferItemsList.md#fromjson)
- [fromJsonString](SupplyOfferItemsList.md#fromjsonstring)
- [getType](SupplyOfferItemsList.md#gettype)
- [toBinary](SupplyOfferItemsList.md#tobinary)
- [toJSON](SupplyOfferItemsList.md#tojson)
- [toJson](SupplyOfferItemsList.md#tojson-1)
- [toJsonString](SupplyOfferItemsList.md#tojsonstring)
- [equals](SupplyOfferItemsList.md#equals-1)
- [fromBinary](SupplyOfferItemsList.md#frombinary-1)
- [fromJson](SupplyOfferItemsList.md#fromjson-1)
- [fromJsonString](SupplyOfferItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOfferItemsList**(`data?`): [`SupplyOfferItemsList`](SupplyOfferItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOfferItemsList`](SupplyOfferItemsList.md)\> |

#### Returns

[`SupplyOfferItemsList`](SupplyOfferItemsList.md)

#### Overrides

Message\&lt;SupplyOfferItemsList\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:1431

## Properties

### list

• **list**: [`SupplyOfferItem`](SupplyOfferItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SupplyOfferItem list = 1;

#### Defined in

src/supply_offers.scailo_pb.ts:1429

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:1438

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:1436

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOfferItemsList"``

#### Defined in

src/supply_offers.scailo_pb.ts:1437

## Methods

### clone

▸ **clone**(): [`SupplyOfferItemsList`](SupplyOfferItemsList.md)

Create a deep copy.

#### Returns

[`SupplyOfferItemsList`](SupplyOfferItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOfferItemsList`](SupplyOfferItemsList.md) \| `PlainMessage`\<[`SupplyOfferItemsList`](SupplyOfferItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOfferItemsList`](SupplyOfferItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOfferItemsList`](SupplyOfferItemsList.md)\>

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
| `a` | `undefined` \| [`SupplyOfferItemsList`](SupplyOfferItemsList.md) \| `PlainMessage`\<[`SupplyOfferItemsList`](SupplyOfferItemsList.md)\> |
| `b` | `undefined` \| [`SupplyOfferItemsList`](SupplyOfferItemsList.md) \| `PlainMessage`\<[`SupplyOfferItemsList`](SupplyOfferItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:1454

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOfferItemsList`](SupplyOfferItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOfferItemsList`](SupplyOfferItemsList.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1442

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOfferItemsList`](SupplyOfferItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItemsList`](SupplyOfferItemsList.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1446

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOfferItemsList`](SupplyOfferItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOfferItemsList`](SupplyOfferItemsList.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1450
