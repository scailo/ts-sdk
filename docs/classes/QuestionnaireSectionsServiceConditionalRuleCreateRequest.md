[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServiceConditionalRuleCreateRequest

# Class: QuestionnaireSectionsServiceConditionalRuleCreateRequest

Request message for appending a new individual line item to an existing Questionnaire Section.
This payload defines the specific family, quantities mapped between internal
and client-specific units of measure, commercial terms (price, tax, discount),
and delivery expectations for the item.

**`Generated`**

from message Scailo.QuestionnaireSectionsServiceConditionalRuleCreateRequest

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)\>

  ↳ **`QuestionnaireSectionsServiceConditionalRuleCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#constructor)

### Properties

- [clientFamilyCode](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#clientfamilycode)
- [clientQuantity](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#clientquantity)
- [clientUomId](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#clientuomid)
- [deliveryDate](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#deliverydate)
- [discount](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#discount)
- [familyId](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#familyid)
- [internalQuantity](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#internalquantity)
- [isInvoiceable](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#isinvoiceable)
- [questionnaireSectionId](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#questionnairesectionid)
- [specifications](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#specifications)
- [taxGroupId](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#taxgroupid)
- [unitPrice](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#unitprice)
- [userComment](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#usercomment)
- [fields](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#fields)
- [runtime](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#runtime)
- [typeName](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#typename)

### Methods

- [clone](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#clone)
- [equals](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#equals)
- [fromBinary](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#frombinary)
- [fromJson](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#fromjsonstring)
- [getType](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#gettype)
- [toBinary](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#tobinary)
- [toJSON](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#tojson)
- [toJson](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#tojsonstring)
- [equals](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#equals-1)
- [fromBinary](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServiceConditionalRuleCreateRequest**(`data?`): [`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)\> |

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServiceConditionalRuleCreateRequest\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2141](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2141)

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

[src/questionnaire_sections.scailo_pb.ts:2043](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2043)

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

[src/questionnaire_sections.scailo_pb.ts:2027](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2027)

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

[src/questionnaire_sections.scailo_pb.ts:2011](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2011)

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

[src/questionnaire_sections.scailo_pb.ts:2107](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2107)

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

[src/questionnaire_sections.scailo_pb.ts:2091](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2091)

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

[src/questionnaire_sections.scailo_pb.ts:1979](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L1979)

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

[src/questionnaire_sections.scailo_pb.ts:1995](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L1995)

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

[src/questionnaire_sections.scailo_pb.ts:2139](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2139)

___

### questionnaireSectionId

• **questionnaireSectionId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent questionnaire section to which this item will be attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 questionnaire_section_id = 10;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L1963)

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

[src/questionnaire_sections.scailo_pb.ts:2123](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2123)

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

[src/questionnaire_sections.scailo_pb.ts:2075](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2075)

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

[src/questionnaire_sections.scailo_pb.ts:2059](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2059)

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

[src/questionnaire_sections.scailo_pb.ts:1947](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L1947)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2148](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2148)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2146](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2146)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServiceConditionalRuleCreateRequest"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2147](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2147)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2176](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2176)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2164](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2164)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2168](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2168)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleCreateRequest`](QuestionnaireSectionsServiceConditionalRuleCreateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2172](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2172)
