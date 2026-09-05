[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionConditionalRulesSearchRequest

# Class: QuestionnaireSectionConditionalRulesSearchRequest

Request payload structure used to search and filter Questionnaire Section Conditional Rule records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.QuestionnaireSectionConditionalRulesSearchRequest

## Hierarchy

- `Message`\<[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)\>

  ↳ **`QuestionnaireSectionConditionalRulesSearchRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionConditionalRulesSearchRequest.md#constructor)

### Properties

- [approvedByUserId](QuestionnaireSectionConditionalRulesSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](QuestionnaireSectionConditionalRulesSearchRequest.md#approvedonend)
- [approvedOnStart](QuestionnaireSectionConditionalRulesSearchRequest.md#approvedonstart)
- [approverRoleId](QuestionnaireSectionConditionalRulesSearchRequest.md#approverroleid)
- [bundledWithId](QuestionnaireSectionConditionalRulesSearchRequest.md#bundledwithid)
- [clientFamilyCode](QuestionnaireSectionConditionalRulesSearchRequest.md#clientfamilycode)
- [clientUomId](QuestionnaireSectionConditionalRulesSearchRequest.md#clientuomid)
- [count](QuestionnaireSectionConditionalRulesSearchRequest.md#count)
- [deliveryDateEnd](QuestionnaireSectionConditionalRulesSearchRequest.md#deliverydateend)
- [deliveryDateExact](QuestionnaireSectionConditionalRulesSearchRequest.md#deliverydateexact)
- [deliveryDateStart](QuestionnaireSectionConditionalRulesSearchRequest.md#deliverydatestart)
- [entityUuid](QuestionnaireSectionConditionalRulesSearchRequest.md#entityuuid)
- [familyId](QuestionnaireSectionConditionalRulesSearchRequest.md#familyid)
- [isActive](QuestionnaireSectionConditionalRulesSearchRequest.md#isactive)
- [offset](QuestionnaireSectionConditionalRulesSearchRequest.md#offset)
- [salesOrderId](QuestionnaireSectionConditionalRulesSearchRequest.md#salesorderid)
- [searchKey](QuestionnaireSectionConditionalRulesSearchRequest.md#searchkey)
- [sortKey](QuestionnaireSectionConditionalRulesSearchRequest.md#sortkey)
- [sortOrder](QuestionnaireSectionConditionalRulesSearchRequest.md#sortorder)
- [status](QuestionnaireSectionConditionalRulesSearchRequest.md#status)
- [taxGroupId](QuestionnaireSectionConditionalRulesSearchRequest.md#taxgroupid)
- [fields](QuestionnaireSectionConditionalRulesSearchRequest.md#fields)
- [runtime](QuestionnaireSectionConditionalRulesSearchRequest.md#runtime)
- [typeName](QuestionnaireSectionConditionalRulesSearchRequest.md#typename)

### Methods

- [clone](QuestionnaireSectionConditionalRulesSearchRequest.md#clone)
- [equals](QuestionnaireSectionConditionalRulesSearchRequest.md#equals)
- [fromBinary](QuestionnaireSectionConditionalRulesSearchRequest.md#frombinary)
- [fromJson](QuestionnaireSectionConditionalRulesSearchRequest.md#fromjson)
- [fromJsonString](QuestionnaireSectionConditionalRulesSearchRequest.md#fromjsonstring)
- [getType](QuestionnaireSectionConditionalRulesSearchRequest.md#gettype)
- [toBinary](QuestionnaireSectionConditionalRulesSearchRequest.md#tobinary)
- [toJSON](QuestionnaireSectionConditionalRulesSearchRequest.md#tojson)
- [toJson](QuestionnaireSectionConditionalRulesSearchRequest.md#tojson-1)
- [toJsonString](QuestionnaireSectionConditionalRulesSearchRequest.md#tojsonstring)
- [equals](QuestionnaireSectionConditionalRulesSearchRequest.md#equals-1)
- [fromBinary](QuestionnaireSectionConditionalRulesSearchRequest.md#frombinary-1)
- [fromJson](QuestionnaireSectionConditionalRulesSearchRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionConditionalRulesSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionConditionalRulesSearchRequest**(`data?`): [`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)\> |

#### Returns

[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

#### Overrides

Message\&lt;QuestionnaireSectionConditionalRulesSearchRequest\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3411](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3411)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 12;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3233](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3233)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 11;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3217](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3217)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 10;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3201](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3201)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 13;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3249](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3249)

___

### bundledWithId

• `Optional` **bundledWithId**: `bigint`

**`Optional`**

**`Description`**

Filter by the internal identifier of the primary sales order line item that this item is bundled with.

**`Example`**

```ts
1025
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 bundled_with_id = 21;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3281](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3281)

___

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the client's specific alphanumeric part number, SKU, or family code.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 26;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3329](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3329)

___

### clientUomId

• `Optional` **clientUomId**: `bigint`

**`Optional`**

**`Description`**

Filter line items requesting a specific client Unit of Measure (UOM).

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 client_uom_id = 23;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3313](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3313)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3121](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3121)

___

### deliveryDateEnd

• `Optional` **deliveryDateEnd**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for delivery ON or BEFORE this specific date.

**`Example`**

```ts
"2023-11-30"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_end = 30;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3393](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3393)

___

### deliveryDateExact

• `Optional` **deliveryDateExact**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for exact delivery on this specific date.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_exact = 28;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3361](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3361)

___

### deliveryDateStart

• `Optional` **deliveryDateStart**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for delivery ON or AFTER this specific date.

**`Example`**

```ts
"2023-11-01"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_start = 29;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3377](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3377)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 6;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3175](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3175)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific family.

**`Example`**

```ts
505
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 22;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3297](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3297)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3105](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3105)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3137](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3137)

___

### salesOrderId

• `Optional` **salesOrderId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific parent sales order.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 sales_order_id = 20;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3265](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3265)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: optional string search_key = 40;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3409](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3409)

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY`](../enums/QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY sort_key = 5;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3159](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3159)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3149](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3149)

___

### status

• `Optional` **status**: [`QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS`](../enums/QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS status = 7;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3185](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3185)

___

### taxGroupId

• `Optional` **taxGroupId**: `bigint`

**`Optional`**

**`Description`**

Filter line items mapped to a specific tax group.

**`Example`**

```ts
4
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 tax_group_id = 27;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3345](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3345)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3418](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3418)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3416](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3416)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionConditionalRulesSearchRequest"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3417](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3417)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3454](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3454)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3442](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3442)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3446](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3446)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRulesSearchRequest`](QuestionnaireSectionConditionalRulesSearchRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3450](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3450)
