[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceItemCreateRequest

# Class: SalesEnquiriesServiceItemCreateRequest

Request message for appending a requested product or service line item to a Sales Enquiry.
This payload captures the prospect's preliminary interest, requested quantities, proposed pricing,
and delivery expectations before a formal quotation is generated.

**Note:** During the initial enquiry phase, exact catalog matches might not be known;
therefore, the item is primarily identified by a free-text `name` rather than a strict product family ID.

**`Generated`**

from message Scailo.SalesEnquiriesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\>

  ↳ **`SalesEnquiriesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceItemCreateRequest.md#constructor)

### Properties

- [deliveryDate](SalesEnquiriesServiceItemCreateRequest.md#deliverydate)
- [discount](SalesEnquiriesServiceItemCreateRequest.md#discount)
- [internalQuantity](SalesEnquiriesServiceItemCreateRequest.md#internalquantity)
- [name](SalesEnquiriesServiceItemCreateRequest.md#name)
- [roundOff](SalesEnquiriesServiceItemCreateRequest.md#roundoff)
- [salesEnquiryId](SalesEnquiriesServiceItemCreateRequest.md#salesenquiryid)
- [specifications](SalesEnquiriesServiceItemCreateRequest.md#specifications)
- [taxGroupId](SalesEnquiriesServiceItemCreateRequest.md#taxgroupid)
- [unitPrice](SalesEnquiriesServiceItemCreateRequest.md#unitprice)
- [uomId](SalesEnquiriesServiceItemCreateRequest.md#uomid)
- [userComment](SalesEnquiriesServiceItemCreateRequest.md#usercomment)
- [fields](SalesEnquiriesServiceItemCreateRequest.md#fields)
- [runtime](SalesEnquiriesServiceItemCreateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceItemCreateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceItemCreateRequest.md#clone)
- [equals](SalesEnquiriesServiceItemCreateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceItemCreateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceItemCreateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceItemCreateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceItemCreateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceItemCreateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceItemCreateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceItemCreateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceItemCreateRequest**(`data?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1269](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1269)

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

[src/sales_enquiries.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1251)

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

[src/sales_enquiries.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1203)

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

[src/sales_enquiries.scailo_pb.ts:1155](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1155)

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

[src/sales_enquiries.scailo_pb.ts:1139](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1139)

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

[src/sales_enquiries.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1235)

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent sales enquiry to which this requested item will be attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sales_enquiry_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1123](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1123)

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

[src/sales_enquiries.scailo_pb.ts:1267](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1267)

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

[src/sales_enquiries.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1219)

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

[src/sales_enquiries.scailo_pb.ts:1187](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1187)

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

[src/sales_enquiries.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1171)

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

[src/sales_enquiries.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1107)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1276)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1274](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1274)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceItemCreateRequest"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1275](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1275)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`\<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1302](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1302)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1290](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1290)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1294](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1294)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1298](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L1298)
