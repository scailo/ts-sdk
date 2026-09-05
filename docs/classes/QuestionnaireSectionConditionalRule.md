[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionConditionalRule

# Class: QuestionnaireSectionConditionalRule

Represents a complete, finalized Questionnaire Section Item entity within the system.
This message encapsulates the comprehensive state of a single ordered product or service,
including its relationship to the parent order, mapped quantities across internal and client units,
commercial terms (pricing, taxes, discounts), delivery schedules, and derived financial calculations.

**Note:** This payload is utilized in read operations to provide clients and downstream systems
(like billing or fulfillment) with the exact, immutable state of an individual line item.

**`Generated`**

from message Scailo.QuestionnaireSectionConditionalRule

## Hierarchy

- `Message`\<[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)\>

  ↳ **`QuestionnaireSectionConditionalRule`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionConditionalRule.md#constructor)

### Properties

- [approvalMetadata](QuestionnaireSectionConditionalRule.md#approvalmetadata)
- [bundledWithId](QuestionnaireSectionConditionalRule.md#bundledwithid)
- [clientFamilyCode](QuestionnaireSectionConditionalRule.md#clientfamilycode)
- [clientQuantity](QuestionnaireSectionConditionalRule.md#clientquantity)
- [clientUomId](QuestionnaireSectionConditionalRule.md#clientuomid)
- [deliveryDate](QuestionnaireSectionConditionalRule.md#deliverydate)
- [discount](QuestionnaireSectionConditionalRule.md#discount)
- [discountedUnitPrice](QuestionnaireSectionConditionalRule.md#discountedunitprice)
- [entityUuid](QuestionnaireSectionConditionalRule.md#entityuuid)
- [familyId](QuestionnaireSectionConditionalRule.md#familyid)
- [internalQuantity](QuestionnaireSectionConditionalRule.md#internalquantity)
- [isInvoiceable](QuestionnaireSectionConditionalRule.md#isinvoiceable)
- [metadata](QuestionnaireSectionConditionalRule.md#metadata)
- [needApproval](QuestionnaireSectionConditionalRule.md#needapproval)
- [questionnaireSectionId](QuestionnaireSectionConditionalRule.md#questionnairesectionid)
- [specifications](QuestionnaireSectionConditionalRule.md#specifications)
- [taxGroupId](QuestionnaireSectionConditionalRule.md#taxgroupid)
- [unitPrice](QuestionnaireSectionConditionalRule.md#unitprice)
- [userComment](QuestionnaireSectionConditionalRule.md#usercomment)
- [fields](QuestionnaireSectionConditionalRule.md#fields)
- [runtime](QuestionnaireSectionConditionalRule.md#runtime)
- [typeName](QuestionnaireSectionConditionalRule.md#typename)

### Methods

- [clone](QuestionnaireSectionConditionalRule.md#clone)
- [equals](QuestionnaireSectionConditionalRule.md#equals)
- [fromBinary](QuestionnaireSectionConditionalRule.md#frombinary)
- [fromJson](QuestionnaireSectionConditionalRule.md#fromjson)
- [fromJsonString](QuestionnaireSectionConditionalRule.md#fromjsonstring)
- [getType](QuestionnaireSectionConditionalRule.md#gettype)
- [toBinary](QuestionnaireSectionConditionalRule.md#tobinary)
- [toJSON](QuestionnaireSectionConditionalRule.md#tojson)
- [toJson](QuestionnaireSectionConditionalRule.md#tojson-1)
- [toJsonString](QuestionnaireSectionConditionalRule.md#tojsonstring)
- [equals](QuestionnaireSectionConditionalRule.md#equals-1)
- [fromBinary](QuestionnaireSectionConditionalRule.md#frombinary-1)
- [fromJson](QuestionnaireSectionConditionalRule.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionConditionalRule.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionConditionalRule**(`data?`): [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)\> |

#### Returns

[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

#### Overrides

Message\&lt;QuestionnaireSectionConditionalRule\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2930](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2930)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2766](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2766)

___

### bundledWithId

• **bundledWithId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal sequence identifier of another questionnaire section line item that this item is bundled or packaged with.

**`Example`**

```ts
1025
```

**`Generated`**

from field: uint64 bundled_with_id = 11;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2808](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2808)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

**`Description`**

The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Generated`**

from field: string client_family_code = 16;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2858](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2858)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents).

**`Example`**

```ts
5000
```

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2848](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2848)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2838](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2838)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

**`Description`**

The specific target delivery date for this line item.

**`Example`**

```ts
"2023-11-15"
```

**`Generated`**

from field: string delivery_date = 20;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2898](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2898)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

**`Description`**

The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).

**`Example`**

```ts
1500
```

**`Generated`**

from field: uint64 discount = 19;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2888](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2888)

___

### discountedUnitPrice

• **discountedUnitPrice**: `bigint` = `protoInt64.zero`

**`Description`**

The system-calculated net price per unit after the applied discount has been subtracted from the base unit price. Represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2125
```

**`Generated`**

from field: uint64 discounted_unit_price = 30;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2928](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2928)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2750](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2750)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the family or catalog item being ordered.

**`Example`**

```ts
505
```

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2818](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2818)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Description`**

The ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents).

**`Example`**

```ts
10000
```

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2828](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2828)

___

### isInvoiceable

• **isInvoiceable**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific line item is eligible to be processed for invoicing.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool is_invoiceable = 22;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2918](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2918)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2758](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2758)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2778](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2778)

___

### questionnaireSectionId

• **questionnaireSectionId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent questionnaire section to which this line item belongs.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 questionnaire_section_id = 10;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2798](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2798)

___

### specifications

• **specifications**: `string` = `""`

**`Description`**

Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.

**`Example`**

```ts
"Requires double-reinforced packaging for international transit."
```

**`Generated`**

from field: string specifications = 21;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2908](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2908)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the tax group or tax bracket applicable to this specific line item.

**`Example`**

```ts
4
```

**`Generated`**

from field: uint64 tax_group_id = 18;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2878](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2878)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Description`**

The agreed-upon price per unit for this item before discounts, represented in the base currency subunit (e.g., cents).

**`Example`**

```ts
2500
```

**`Generated`**

from field: uint64 unit_price = 17;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2868](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2868)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2788](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2788)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2937](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2937)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2935](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2935)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionConditionalRule"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2936](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2936)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2971](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2971)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2959](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2959)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2963](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2963)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2967](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2967)
