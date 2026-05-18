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

[src/quotations_responses.scailo_pb.ts:2928](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2928)

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

[src/quotations_responses.scailo_pb.ts:2861](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2861)

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

[src/quotations_responses.scailo_pb.ts:2845](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2845)

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

[src/quotations_responses.scailo_pb.ts:2829](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2829)

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

[src/quotations_responses.scailo_pb.ts:2877](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2877)

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

[src/quotations_responses.scailo_pb.ts:2695](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2695)

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

[src/quotations_responses.scailo_pb.ts:2765](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2765)

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

[src/quotations_responses.scailo_pb.ts:2749](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2749)

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

[src/quotations_responses.scailo_pb.ts:2813](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2813)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 23;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2905](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2905)

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

[src/quotations_responses.scailo_pb.ts:2679](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2679)

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

[src/quotations_responses.scailo_pb.ts:2797](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2797)

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

[src/quotations_responses.scailo_pb.ts:2781](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2781)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 22;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2898](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2898)

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

[src/quotations_responses.scailo_pb.ts:2711](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2711)

___

### quotationRequestItemId

• **quotationRequestItemId**: `bigint` = `protoInt64.zero`

Stores the corresponding item ID of the item from the quotation request

**`Generated`**

from field: uint64 quotation_request_item_id = 21;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2891](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2891)

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: uint64 quotation_response_id = 20;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2884](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2884)

___

### sortKey

• **sortKey**: [`QUOTATION_RESPONSE_ITEM_SORT_KEY`](../enums/QUOTATION_RESPONSE_ITEM_SORT_KEY.md) = `QUOTATION_RESPONSE_ITEM_SORT_KEY.QUOTATION_RESPONSE_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.QUOTATION_RESPONSE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2733](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2733)

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

[src/quotations_responses.scailo_pb.ts:2723](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2723)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID

**`Generated`**

from field: uint64 tax_group_id = 29;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2926](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2926)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The internal unit of material

**`Generated`**

from field: uint64 uom_id = 24;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2912](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2912)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 26;

#### Defined in

[src/quotations_responses.scailo_pb.ts:2919](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2919)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses.scailo_pb.ts:2935](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2935)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses.scailo_pb.ts:2933](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2933)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServiceItemsFilterReq"``

#### Defined in

[src/quotations_responses.scailo_pb.ts:2934](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2934)

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

[src/quotations_responses.scailo_pb.ts:2971](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2971)

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

[src/quotations_responses.scailo_pb.ts:2959](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2959)

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

[src/quotations_responses.scailo_pb.ts:2963](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2963)

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

[src/quotations_responses.scailo_pb.ts:2967](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/quotations_responses.scailo_pb.ts#L2967)
