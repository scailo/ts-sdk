[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceItemUpdateRequest

# Class: SalesEnquiriesServiceItemUpdateRequest

Request message for modifying the core parameters of an existing Sales Enquiry line item.
Supports updating requested quantities, proposed commercial terms, delivery dates, and specifications
as the lead is qualified and requirements become clearer.

**`Generated`**

from message Scailo.SalesEnquiriesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

  ↳ **`SalesEnquiriesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](SalesEnquiriesServiceItemUpdateRequest.md#deliverydate)
- [discount](SalesEnquiriesServiceItemUpdateRequest.md#discount)
- [id](SalesEnquiriesServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesEnquiriesServiceItemUpdateRequest.md#internalquantity)
- [name](SalesEnquiriesServiceItemUpdateRequest.md#name)
- [roundOff](SalesEnquiriesServiceItemUpdateRequest.md#roundoff)
- [specifications](SalesEnquiriesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesEnquiriesServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesEnquiriesServiceItemUpdateRequest.md#unitprice)
- [uomId](SalesEnquiriesServiceItemUpdateRequest.md#uomid)
- [userComment](SalesEnquiriesServiceItemUpdateRequest.md#usercomment)
- [fields](SalesEnquiriesServiceItemUpdateRequest.md#fields)
- [runtime](SalesEnquiriesServiceItemUpdateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceItemUpdateRequest.md#clone)
- [equals](SalesEnquiriesServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceItemUpdateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceItemUpdateRequest**(`data?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1492](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1492)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Mandatory`**

**`Description`**

The specific prospective target delivery date requested or proposed for this line item.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string. Expected to follow the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1474)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The proposed discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 discount = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1426](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1426)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1346)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The prospective quantity requested, represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
10000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1378](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1378)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The descriptive name of the requested product or service. Free-text is used here as the exact catalog item may not be definitively identified during the initial lead phase.

**`Example`**

```ts
"Industrial Copper Wiring - 12 AWG"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1362](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1362)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount for this specific item's financial total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer.

**`Generated`**

from field: optional int64 round_off = 17;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1458](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1458)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Additional custom textual requirements, notes, or specifications requested by the prospect for this item.

**`Example`**

```ts
"Requires double-reinforced packaging for international transit."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 19;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1490)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the tax group or tax bracket tentatively applicable to this specific line item.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1442](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1442)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The proposed or target price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 unit_price = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1410](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1410)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) applicable to this requested item.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1394)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1330)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1499](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1499)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1497](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1497)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceItemUpdateRequest"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1498)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1525)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1513](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1513)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1517](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1517)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1521](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1521)
