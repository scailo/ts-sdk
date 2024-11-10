[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SupplyOffersList

# Class: SupplyOffersList

Describes the message consisting of the list of supply offers

**`Generated`**

from message Scailo.SupplyOffersList

## Hierarchy

- `Message`\<[`SupplyOffersList`](SupplyOffersList.md)\>

  ↳ **`SupplyOffersList`**

## Table of contents

### Constructors

- [constructor](SupplyOffersList.md#constructor)

### Properties

- [list](SupplyOffersList.md#list)
- [fields](SupplyOffersList.md#fields)
- [runtime](SupplyOffersList.md#runtime)
- [typeName](SupplyOffersList.md#typename)

### Methods

- [clone](SupplyOffersList.md#clone)
- [equals](SupplyOffersList.md#equals)
- [fromBinary](SupplyOffersList.md#frombinary)
- [fromJson](SupplyOffersList.md#fromjson)
- [fromJsonString](SupplyOffersList.md#fromjsonstring)
- [getType](SupplyOffersList.md#gettype)
- [toBinary](SupplyOffersList.md#tobinary)
- [toJSON](SupplyOffersList.md#tojson)
- [toJson](SupplyOffersList.md#tojson-1)
- [toJsonString](SupplyOffersList.md#tojsonstring)
- [equals](SupplyOffersList.md#equals-1)
- [fromBinary](SupplyOffersList.md#frombinary-1)
- [fromJson](SupplyOffersList.md#fromjson-1)
- [fromJsonString](SupplyOffersList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SupplyOffersList**(`data?`): [`SupplyOffersList`](SupplyOffersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SupplyOffersList`](SupplyOffersList.md)\> |

#### Returns

[`SupplyOffersList`](SupplyOffersList.md)

#### Overrides

Message\&lt;SupplyOffersList\&gt;.constructor

#### Defined in

src/supply_offers.scailo_pb.ts:1389

## Properties

### list

• **list**: [`SupplyOffer`](SupplyOffer.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.SupplyOffer list = 1;

#### Defined in

src/supply_offers.scailo_pb.ts:1387

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/supply_offers.scailo_pb.ts:1396

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/supply_offers.scailo_pb.ts:1394

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SupplyOffersList"``

#### Defined in

src/supply_offers.scailo_pb.ts:1395

## Methods

### clone

▸ **clone**(): [`SupplyOffersList`](SupplyOffersList.md)

Create a deep copy.

#### Returns

[`SupplyOffersList`](SupplyOffersList.md)

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
| `other` | `undefined` \| ``null`` \| [`SupplyOffersList`](SupplyOffersList.md) \| `PlainMessage`\<[`SupplyOffersList`](SupplyOffersList.md)\> |

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

▸ **getType**(): `MessageType`\<[`SupplyOffersList`](SupplyOffersList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SupplyOffersList`](SupplyOffersList.md)\>

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
| `a` | `undefined` \| [`SupplyOffersList`](SupplyOffersList.md) \| `PlainMessage`\<[`SupplyOffersList`](SupplyOffersList.md)\> |
| `b` | `undefined` \| [`SupplyOffersList`](SupplyOffersList.md) \| `PlainMessage`\<[`SupplyOffersList`](SupplyOffersList.md)\> |

#### Returns

`boolean`

#### Defined in

src/supply_offers.scailo_pb.ts:1412

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SupplyOffersList`](SupplyOffersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SupplyOffersList`](SupplyOffersList.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1400

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SupplyOffersList`](SupplyOffersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersList`](SupplyOffersList.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1404

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SupplyOffersList`](SupplyOffersList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SupplyOffersList`](SupplyOffersList.md)

#### Defined in

src/supply_offers.scailo_pb.ts:1408
