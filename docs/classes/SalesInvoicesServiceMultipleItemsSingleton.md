[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceMultipleItemsSingleton

# Class: SalesInvoicesServiceMultipleItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a sales invoice

**`Generated`**

from message Scailo.SalesInvoicesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\>

  ↳ **`SalesInvoicesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](SalesInvoicesServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](SalesInvoicesServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](SalesInvoicesServiceMultipleItemsSingleton.md#clientuomid)
- [familyId](SalesInvoicesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](SalesInvoicesServiceMultipleItemsSingleton.md#internalquantity)
- [roundOff](SalesInvoicesServiceMultipleItemsSingleton.md#roundoff)
- [specifications](SalesInvoicesServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](SalesInvoicesServiceMultipleItemsSingleton.md#taxgroupid)
- [unitPrice](SalesInvoicesServiceMultipleItemsSingleton.md#unitprice)
- [fields](SalesInvoicesServiceMultipleItemsSingleton.md#fields)
- [runtime](SalesInvoicesServiceMultipleItemsSingleton.md#runtime)
- [typeName](SalesInvoicesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](SalesInvoicesServiceMultipleItemsSingleton.md#clone)
- [equals](SalesInvoicesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](SalesInvoicesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](SalesInvoicesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](SalesInvoicesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](SalesInvoicesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](SalesInvoicesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](SalesInvoicesServiceMultipleItemsSingleton.md#tojson)
- [toJson](SalesInvoicesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](SalesInvoicesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](SalesInvoicesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](SalesInvoicesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](SalesInvoicesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceMultipleItemsSingleton**(`data?`): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;SalesInvoicesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:1081](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1081)

## Properties

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

The family code as represented by the client

**`Generated`**

from field: string client_family_code = 15;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1051](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1051)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1044](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1044)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1037](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1037)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1023](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1023)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being supplied in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1030)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1072)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1079](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1079)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1065)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied to the client)

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

[src/sales_invoices.scailo_pb.ts:1058](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1058)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1088)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1086](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1086)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceMultipleItemsSingleton"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:1087](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1087)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1112)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1100](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1100)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1104)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceMultipleItemsSingleton`](SalesInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/f953b47013676519c3cca076867c8f445aa20ea3/src/sales_invoices.scailo_pb.ts#L1108)
