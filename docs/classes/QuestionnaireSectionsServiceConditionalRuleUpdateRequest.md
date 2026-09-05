[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServiceConditionalRuleUpdateRequest

# Class: QuestionnaireSectionsServiceConditionalRuleUpdateRequest

Request message for modifying the core transactional parameters of an existing Questionnaire Section line item.
Supports updating quantities, commercial terms, delivery dates, and specifications,
typically utilized during order negotiation or amendment phases.

**`Generated`**

from message Scailo.QuestionnaireSectionsServiceConditionalRuleUpdateRequest

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)\>

  ↳ **`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#constructor)

### Properties

- [clientFamilyCode](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#clientfamilycode)
- [clientQuantity](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#clientquantity)
- [clientUomId](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#clientuomid)
- [deliveryDate](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#deliverydate)
- [discount](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#discount)
- [id](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#id)
- [internalQuantity](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#internalquantity)
- [isInvoiceable](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#isinvoiceable)
- [specifications](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#specifications)
- [taxGroupId](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#taxgroupid)
- [unitPrice](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#unitprice)
- [userComment](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#usercomment)
- [fields](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#fields)
- [runtime](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#runtime)
- [typeName](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#typename)

### Methods

- [clone](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#clone)
- [equals](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#equals)
- [fromBinary](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#frombinary)
- [fromJson](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#fromjsonstring)
- [getType](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#gettype)
- [toBinary](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#tobinary)
- [toJSON](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#tojson)
- [toJson](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#tojsonstring)
- [equals](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#equals-1)
- [fromBinary](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServiceConditionalRuleUpdateRequest**(`data?`): [`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)\> |

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServiceConditionalRuleUpdateRequest\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2690](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2690)

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

[src/questionnaire_sections.scailo_pb.ts:2592](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2592)

___

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents).

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

[src/questionnaire_sections.scailo_pb.ts:2576](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2576)

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

[src/questionnaire_sections.scailo_pb.ts:2560](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2560)

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

[src/questionnaire_sections.scailo_pb.ts:2656](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2656)

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

[src/questionnaire_sections.scailo_pb.ts:2640](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2640)

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

[src/questionnaire_sections.scailo_pb.ts:2528](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2528)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents).

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

[src/questionnaire_sections.scailo_pb.ts:2544](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2544)

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

[src/questionnaire_sections.scailo_pb.ts:2688](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2688)

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

[src/questionnaire_sections.scailo_pb.ts:2672](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2672)

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

[src/questionnaire_sections.scailo_pb.ts:2624](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2624)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated price per unit for this item, represented in the base currency subunit (e.g., cents).

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

[src/questionnaire_sections.scailo_pb.ts:2608](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2608)

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

[src/questionnaire_sections.scailo_pb.ts:2512](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2512)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2697](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2697)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2695](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2695)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServiceConditionalRuleUpdateRequest"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2696](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2696)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2724](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2724)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2712](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2712)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2716](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2716)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServiceConditionalRuleUpdateRequest`](QuestionnaireSectionsServiceConditionalRuleUpdateRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:2720](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L2720)
