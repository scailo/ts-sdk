[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceItemsFilterReq

# Class: QuotationsResponsesServiceItemsFilterReq

Describes the request payload to filter quotation response items

**`Generated`**

from message Scailo.QuotationsResponsesServiceItemsFilterReq

## Hierarchy

- `Message`\<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\>

  ↳ **`QuotationsResponsesServiceItemsFilterReq`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceItemsFilterReq.md#constructor)

### Properties

- [approvedByUserId](QuotationsResponsesServiceItemsFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QuotationsResponsesServiceItemsFilterReq.md#approvedonend)
- [approvedOnStart](QuotationsResponsesServiceItemsFilterReq.md#approvedonstart)
- [approverRoleId](QuotationsResponsesServiceItemsFilterReq.md#approverroleid)
- [count](QuotationsResponsesServiceItemsFilterReq.md#count)
- [creationTimestampEnd](QuotationsResponsesServiceItemsFilterReq.md#creationtimestampend)
- [creationTimestampStart](QuotationsResponsesServiceItemsFilterReq.md#creationtimestampstart)
- [entityUuid](QuotationsResponsesServiceItemsFilterReq.md#entityuuid)
- [hsnSacCode](QuotationsResponsesServiceItemsFilterReq.md#hsnsaccode)
- [isActive](QuotationsResponsesServiceItemsFilterReq.md#isactive)
- [modificationTimestampEnd](QuotationsResponsesServiceItemsFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QuotationsResponsesServiceItemsFilterReq.md#modificationtimestampstart)
- [name](QuotationsResponsesServiceItemsFilterReq.md#name)
- [offset](QuotationsResponsesServiceItemsFilterReq.md#offset)
- [quotationRequestItemId](QuotationsResponsesServiceItemsFilterReq.md#quotationrequestitemid)
- [quotationResponseId](QuotationsResponsesServiceItemsFilterReq.md#quotationresponseid)
- [sortKey](QuotationsResponsesServiceItemsFilterReq.md#sortkey)
- [sortOrder](QuotationsResponsesServiceItemsFilterReq.md#sortorder)
- [taxGroupId](QuotationsResponsesServiceItemsFilterReq.md#taxgroupid)
- [uomId](QuotationsResponsesServiceItemsFilterReq.md#uomid)
- [vendorUomId](QuotationsResponsesServiceItemsFilterReq.md#vendoruomid)
- [fields](QuotationsResponsesServiceItemsFilterReq.md#fields)
- [runtime](QuotationsResponsesServiceItemsFilterReq.md#runtime)
- [typeName](QuotationsResponsesServiceItemsFilterReq.md#typename)

### Methods

- [clone](QuotationsResponsesServiceItemsFilterReq.md#clone)
- [equals](QuotationsResponsesServiceItemsFilterReq.md#equals)
- [fromBinary](QuotationsResponsesServiceItemsFilterReq.md#frombinary)
- [fromJson](QuotationsResponsesServiceItemsFilterReq.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceItemsFilterReq.md#fromjsonstring)
- [getType](QuotationsResponsesServiceItemsFilterReq.md#gettype)
- [toBinary](QuotationsResponsesServiceItemsFilterReq.md#tobinary)
- [toJSON](QuotationsResponsesServiceItemsFilterReq.md#tojson)
- [toJson](QuotationsResponsesServiceItemsFilterReq.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceItemsFilterReq.md#tojsonstring)
- [equals](QuotationsResponsesServiceItemsFilterReq.md#equals-1)
- [fromBinary](QuotationsResponsesServiceItemsFilterReq.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceItemsFilterReq.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceItemsFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceItemsFilterReq**(`data?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Overrides

Message\&lt;QuotationsResponsesServiceItemsFilterReq\&gt;.constructor

#### Defined in

[src/quotations_responses.scailo_pb.ts:2995](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2995)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2928](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2928)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_on_end = 12;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2912](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2912)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_on_start = 11;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2896](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2896)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

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

from field: uint64 approver_role_id = 14;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2944](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2944)

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

[src/quotations_responses.scailo_pb.ts:2762](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2762)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2832](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2832)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2816](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2816)

___

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 8;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2880](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2880)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 23;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2972](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2972)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2746](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2746)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2864](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2864)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2848](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2848)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 22;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2965](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2965)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

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

from field: uint64 offset = 3;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2778](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2778)

___

### quotationRequestItemId

• **quotationRequestItemId**: `bigint` = `protoInt64.zero`

Stores the corresponding item ID of the item from the quotation request

**`Generated`**

from field: uint64 quotation_request_item_id = 21;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2958](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2958)

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: uint64 quotation_response_id = 20;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2951](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2951)

___

### sortKey

• **sortKey**: [`QUOTATION_RESPONSE_ITEM_SORT_KEY`](../enums/QUOTATION_RESPONSE_ITEM_SORT_KEY.md) = `QUOTATION_RESPONSE_ITEM_SORT_KEY.QUOTATION_RESPONSE_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.QUOTATION_RESPONSE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2800](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2800)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2790](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2790)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID

**`Generated`**

from field: uint64 tax_group_id = 29;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2993](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2993)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The internal unit of material

**`Generated`**

from field: uint64 uom_id = 24;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2979](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2979)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 26;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2986](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L2986)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses.scailo_pb.ts:3002](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L3002)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses.scailo_pb.ts:3000](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L3000)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServiceItemsFilterReq"``

#### Defined in

[src/quotations_responses.scailo_pb.ts:3001](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L3001)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses.scailo_pb.ts:3038](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L3038)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:3026](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L3026)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:3030](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L3030)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceItemsFilterReq`](QuotationsResponsesServiceItemsFilterReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:3034](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/quotations_responses.scailo_pb.ts#L3034)
