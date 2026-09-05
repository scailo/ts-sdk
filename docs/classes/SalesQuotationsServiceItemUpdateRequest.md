[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceItemUpdateRequest

# Class: SalesQuotationsServiceItemUpdateRequest

Request message for modifying the core transactional parameters of an existing Sales Quotation line item.
Supports updating quantities, commercial terms, delivery dates, and specifications,
typically utilized during quotation negotiation or amendment phases.

**`Generated`**

from message Scailo.SalesQuotationsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\>

  ↳ **`SalesQuotationsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceItemUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](SalesQuotationsServiceItemUpdateRequest.md#clientfamilycode)
- [clientQuantity](SalesQuotationsServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](SalesQuotationsServiceItemUpdateRequest.md#clientuomid)
- [deliveryDate](SalesQuotationsServiceItemUpdateRequest.md#deliverydate)
- [discount](SalesQuotationsServiceItemUpdateRequest.md#discount)
- [id](SalesQuotationsServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesQuotationsServiceItemUpdateRequest.md#internalquantity)
- [specifications](SalesQuotationsServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesQuotationsServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesQuotationsServiceItemUpdateRequest.md#unitprice)
- [userComment](SalesQuotationsServiceItemUpdateRequest.md#usercomment)
- [fields](SalesQuotationsServiceItemUpdateRequest.md#fields)
- [runtime](SalesQuotationsServiceItemUpdateRequest.md#runtime)
- [typeName](SalesQuotationsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceItemUpdateRequest.md#clone)
- [equals](SalesQuotationsServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceItemUpdateRequest.md#tojson)
- [toJson](SalesQuotationsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceItemUpdateRequest**(`data?`): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:2032](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2032)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The updated client's specific alphanumeric part number, SKU, or family code.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1950)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated quoted quantity represented in the client's specific unit of measure. Stored in subunits (cents).

**`Example`**

```ts
5000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1934](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1934)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated unique internal identifier of the Unit of Measure (UOM) requested by the client.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1918](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1918)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Mandatory`**

**`Description`**

The updated specific target delivery date for this line item.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2014](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2014)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).

**`Example`**

```ts
1500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1998](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1998)

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

[src/sales_quotations.scailo_pb.ts:1886](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1886)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated quoted quantity represented in the system's internal base unit of measure. Stored in subunits (cents).

**`Example`**

```ts
10000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1902](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1902)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Updated custom textual requirements, manufacturing notes, or specifications for fulfilling this item.

**`Example`**

```ts
"Requires double-reinforced packaging for international transit."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:2030](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2030)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated unique internal identifier of the tax group or tax bracket applicable to this item.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1982)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated proposed price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1966)

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

[src/sales_quotations.scailo_pb.ts:1870](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L1870)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2039](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2039)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2037)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceItemUpdateRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2038)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2065)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2053](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2053)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2057](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2057)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceItemUpdateRequest`](SalesQuotationsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:2061](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L2061)
