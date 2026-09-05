[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServiceMultipleConditionalRulesSingleton

# Class: QuestionnaireSectionsServiceMultipleConditionalRulesSingleton

Represents a single line item payload within a bulk creation request.
Contains the exact same transactional parameters as a standard item creation request,
omitting the parent order ID which is declared once at the batch level.

**`Generated`**

from message Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesSingleton

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)\>

  ↳ **`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#constructor)

### Properties

- [clientFamilyCode](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#clientfamilycode)
- [clientQuantity](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#clientquantity)
- [clientUomId](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#clientuomid)
- [deliveryDate](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#deliverydate)
- [discount](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#discount)
- [familyId](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#familyid)
- [internalQuantity](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#internalquantity)
- [isInvoiceable](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#isinvoiceable)
- [specifications](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#specifications)
- [taxGroupId](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#taxgroupid)
- [unitPrice](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#unitprice)
- [fields](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#fields)
- [runtime](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#runtime)
- [typeName](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#typename)

### Methods

- [clone](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#clone)
- [equals](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#equals)
- [fromBinary](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#frombinary)
- [fromJson](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#fromjsonstring)
- [getType](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#gettype)
- [toBinary](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#tobinary)
- [toJSON](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#tojson)
- [toJson](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#tojsonstring)
- [equals](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#equals-1)
- [fromBinary](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServiceMultipleConditionalRulesSingleton**(`data?`): [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)\> |

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServiceMultipleConditionalRulesSingleton\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2366](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2366)

## Properties

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.

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

[src/questionnaire_sections.scailo_pb.ts:2268](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2268)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/questionnaire_sections.scailo_pb.ts:2252](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2252)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.

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

[src/questionnaire_sections.scailo_pb.ts:2236](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2236)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Mandatory`**

**`Description`**

The specific target delivery date for this line item, which may differ from the overall order's delivery schedule.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string. Expected to follow the standard date format designated by the client (e.g., YYYY-MM-DD).

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2332](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2332)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).

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

[src/questionnaire_sections.scailo_pb.ts:2316](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2316)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the family or catalog item being ordered.

**`Example`**

```ts
505
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2204](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2204)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.

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

[src/questionnaire_sections.scailo_pb.ts:2220](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2220)

___

### isInvoiceable

• `Optional` **isInvoiceable**: `boolean`

**`Optional`**

**`Description`**

A boolean flag indicating whether this specific line item is eligible to be processed for invoicing.

**`Example`**

```ts
true
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: optional bool is_invoiceable = 22;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2364](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2364)

___

### specifications

• `Optional` **specifications**: `string`

**`Optional`**

**`Description`**

Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.

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

[src/questionnaire_sections.scailo_pb.ts:2348](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2348)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the tax group or tax bracket applicable to this specific line item.

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

[src/questionnaire_sections.scailo_pb.ts:2300](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2300)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The agreed-upon price per unit for this item, represented in the base currency subunit (e.g., cents).

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

[src/questionnaire_sections.scailo_pb.ts:2284](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2284)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2373](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2373)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2371](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2371)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesSingleton"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2372](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2372)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2399](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2399)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2387](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2387)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2391](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2391)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceMultipleConditionalRulesSingleton`](QuestionnaireSectionsServiceMultipleConditionalRulesSingleton.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2395](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2395)
