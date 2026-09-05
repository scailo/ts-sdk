[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesServiceMultipleItemsSingleton

# Class: ProformaInvoicesServiceMultipleItemsSingleton

Represents a single line item payload within a bulk creation request.
Contains the exact same transactional parameters as a standard item creation request,
omitting the parent invoice ID which is declared once at the batch level.

**`Generated`**

from message Scailo.ProformaInvoicesServiceMultipleItemsSingleton

## Hierarchy

- `Message`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\>

  ↳ **`ProformaInvoicesServiceMultipleItemsSingleton`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesServiceMultipleItemsSingleton.md#constructor)

### Properties

- [clientFamilyCode](ProformaInvoicesServiceMultipleItemsSingleton.md#clientfamilycode)
- [clientQuantity](ProformaInvoicesServiceMultipleItemsSingleton.md#clientquantity)
- [clientUomId](ProformaInvoicesServiceMultipleItemsSingleton.md#clientuomid)
- [familyId](ProformaInvoicesServiceMultipleItemsSingleton.md#familyid)
- [internalQuantity](ProformaInvoicesServiceMultipleItemsSingleton.md#internalquantity)
- [roundOff](ProformaInvoicesServiceMultipleItemsSingleton.md#roundoff)
- [specifications](ProformaInvoicesServiceMultipleItemsSingleton.md#specifications)
- [taxGroupId](ProformaInvoicesServiceMultipleItemsSingleton.md#taxgroupid)
- [unitPrice](ProformaInvoicesServiceMultipleItemsSingleton.md#unitprice)
- [fields](ProformaInvoicesServiceMultipleItemsSingleton.md#fields)
- [runtime](ProformaInvoicesServiceMultipleItemsSingleton.md#runtime)
- [typeName](ProformaInvoicesServiceMultipleItemsSingleton.md#typename)

### Methods

- [clone](ProformaInvoicesServiceMultipleItemsSingleton.md#clone)
- [equals](ProformaInvoicesServiceMultipleItemsSingleton.md#equals)
- [fromBinary](ProformaInvoicesServiceMultipleItemsSingleton.md#frombinary)
- [fromJson](ProformaInvoicesServiceMultipleItemsSingleton.md#fromjson)
- [fromJsonString](ProformaInvoicesServiceMultipleItemsSingleton.md#fromjsonstring)
- [getType](ProformaInvoicesServiceMultipleItemsSingleton.md#gettype)
- [toBinary](ProformaInvoicesServiceMultipleItemsSingleton.md#tobinary)
- [toJSON](ProformaInvoicesServiceMultipleItemsSingleton.md#tojson)
- [toJson](ProformaInvoicesServiceMultipleItemsSingleton.md#tojson-1)
- [toJsonString](ProformaInvoicesServiceMultipleItemsSingleton.md#tojsonstring)
- [equals](ProformaInvoicesServiceMultipleItemsSingleton.md#equals-1)
- [fromBinary](ProformaInvoicesServiceMultipleItemsSingleton.md#frombinary-1)
- [fromJson](ProformaInvoicesServiceMultipleItemsSingleton.md#fromjson-1)
- [fromJsonString](ProformaInvoicesServiceMultipleItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesServiceMultipleItemsSingleton**(`data?`): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Overrides

Message\&lt;ProformaInvoicesServiceMultipleItemsSingleton\&gt;.constructor

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1671](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1671)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing of this item.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 15;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1605)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The estimated quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

**`Example`**

```ts
5000
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_quantity = 14;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1589)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this estimated item.

**`Example`**

```ts
12
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 client_uom_id = 13;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1573](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1573)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being estimated in this proforma invoice.

**`Example`**

```ts
505
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1541)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The estimated quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/proforma_invoices.scailo_pb.ts:1557](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1557)

___

### roundOff

• `Optional` **roundOff**: `bigint`

**`Optional`**

**`Description`**

The applicable rounding adjustment amount for this specific item's estimated financial total. Can be positive or negative, represented in the base currency subunit.

**`Example`**

```ts
-15
```

**`Regex`**

^-?[0-9]+$

**`Format`**

Signed 64-bit integer.

**`Generated`**

from field: optional int64 round_off = 18;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1653](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1653)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Additional custom textual requirements, notes, or specifications associated with this preliminary item.

**`Example`**

```ts
"Estimated based on current freight rates."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string specifications = 19;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1669](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1669)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the tax group or tax bracket anticipated for this specific line item.

**`Example`**

```ts
4
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 tax_group_id = 17;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1637](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1637)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The estimated price per unit for this item, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 unit_price = 16;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1621](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1621)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1678](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1678)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1676)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesServiceMultipleItemsSingleton"``

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1677](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1677)

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md) \| `PlainMessage`\<[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1702](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1702)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1690](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1690)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1694](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1694)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesServiceMultipleItemsSingleton`](ProformaInvoicesServiceMultipleItemsSingleton.md)

#### Defined in

[src/proforma_invoices.scailo_pb.ts:1698](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/proforma_invoices.scailo_pb.ts#L1698)
