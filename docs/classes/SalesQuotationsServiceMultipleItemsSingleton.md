[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceMultipleItemsSingleton

# Class: SalesQuotationsServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a sales quotation

**`Generated`**

from message Scailo.SalesQuotationsServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\>

  ↳ **`SalesQuotationsServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](SalesQuotationsServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](SalesQuotationsServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](SalesQuotationsServiceMultipleItemsSingleton.md#clientuomid)
- [deliveryDate](SalesQuotationsServiceMultipleItemsSingleton.md#deliverydate)
- [discount](SalesQuotationsServiceMultipleItemsSingleton.md#discount)
- [familyId](SalesQuotationsServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](SalesQuotationsServiceMultipleItemsSingleton.md#internalquantity)
- [specifications](SalesQuotationsServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](SalesQuotationsServiceMultipleItemsSingleton.md#taxgroupid)
- [unitPrice](SalesQuotationsServiceMultipleItemsSingleton.md#unitprice)
- [fields](SalesQuotationsServiceMultipleItemsSingleton.md#fields)
- [runtime](SalesQuotationsServiceMultipleItemsSingleton.md#runtime)
- [typeName](SalesQuotationsServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](SalesQuotationsServiceMultipleItemsSingleton.md#clone)
- [equals](SalesQuotationsServiceMultipleItemsSingleton.md#equals)
- [fromBinary](SalesQuotationsServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](SalesQuotationsServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](SalesQuotationsServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](SalesQuotationsServiceMultipleItemsSingleton.md#gettype)
- [toBinary](SalesQuotationsServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](SalesQuotationsServiceMultipleItemsSingleton.md#tojson)
- [toJson](SalesQuotationsServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](SalesQuotationsServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](SalesQuotationsServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](SalesQuotationsServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](SalesQuotationsServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceMultipleItemsSingleton**(`data?`): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;SalesQuotationsServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1155)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1118)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being quotationed in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1111)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1104)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1146)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The applicable discount percentage (in cents)

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1139](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1139)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1090)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being quotationed in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1097)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1153)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1132)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1125)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1162)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1160](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1160)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceMultipleItemsSingleton"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1161)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1187)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1175](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1175)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1179](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1179)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceMultipleItemsSingleton`](SalesQuotationsServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_quotations.scailo_pb.ts#L1183)
