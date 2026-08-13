[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxParamsServiceFilterReq

# Class: TaxParamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.TaxParamsServiceFilterReq

## Hierarchy

- `Message`\<[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)\>

  ↳ **`TaxParamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](TaxParamsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](TaxParamsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](TaxParamsServiceFilterReq.md#approvedonend)
- [approvedOnStart](TaxParamsServiceFilterReq.md#approvedonstart)
- [approverRoleId](TaxParamsServiceFilterReq.md#approverroleid)
- [category](TaxParamsServiceFilterReq.md#category)
- [code](TaxParamsServiceFilterReq.md#code)
- [count](TaxParamsServiceFilterReq.md#count)
- [creationTimestampEnd](TaxParamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](TaxParamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](TaxParamsServiceFilterReq.md#entityuuid)
- [isActive](TaxParamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](TaxParamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](TaxParamsServiceFilterReq.md#modificationtimestampstart)
- [name](TaxParamsServiceFilterReq.md#name)
- [offset](TaxParamsServiceFilterReq.md#offset)
- [sortKey](TaxParamsServiceFilterReq.md#sortkey)
- [sortOrder](TaxParamsServiceFilterReq.md#sortorder)
- [status](TaxParamsServiceFilterReq.md#status)
- [valueType](TaxParamsServiceFilterReq.md#valuetype)
- [fields](TaxParamsServiceFilterReq.md#fields)
- [runtime](TaxParamsServiceFilterReq.md#runtime)
- [typeName](TaxParamsServiceFilterReq.md#typename)

### Methods

- [clone](TaxParamsServiceFilterReq.md#clone)
- [equals](TaxParamsServiceFilterReq.md#equals)
- [fromBinary](TaxParamsServiceFilterReq.md#frombinary)
- [fromJson](TaxParamsServiceFilterReq.md#fromjson)
- [fromJsonString](TaxParamsServiceFilterReq.md#fromjsonstring)
- [getType](TaxParamsServiceFilterReq.md#gettype)
- [toBinary](TaxParamsServiceFilterReq.md#tobinary)
- [toJSON](TaxParamsServiceFilterReq.md#tojson)
- [toJson](TaxParamsServiceFilterReq.md#tojson-1)
- [toJsonString](TaxParamsServiceFilterReq.md#tojsonstring)
- [equals](TaxParamsServiceFilterReq.md#equals-1)
- [fromBinary](TaxParamsServiceFilterReq.md#frombinary-1)
- [fromJson](TaxParamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](TaxParamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxParamsServiceFilterReq**(`data?`): [`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)\> |

#### Returns

[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

#### Overrides

Message\&lt;TaxParamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/tax_params.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1059)

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

[src/tax_params.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1013)

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

[src/tax_params.scailo_pb.ts:997](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L997)

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

[src/tax_params.scailo_pb.ts:981](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L981)

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

[src/tax_params.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1029)

___

### category

• **category**: [`TAX_PARAM_CATEGORY`](../enums/TAX_PARAM_CATEGORY.md) = `TAX_PARAM_CATEGORY.TAX_PARAM_CATEGORY_ANY_UNSPECIFIED`

The category of the tax param

**`Generated`**

from field: Scailo.TAX_PARAM_CATEGORY category = 32;

#### Defined in

[src/tax_params.scailo_pb.ts:1057](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1057)

___

### code

• **code**: `string` = `""`

The unique code by which the tax param is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/tax_params.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1043)

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

[src/tax_params.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L835)

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

[src/tax_params.scailo_pb.ts:905](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L905)

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

[src/tax_params.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L889)

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

[src/tax_params.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L953)

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

[src/tax_params.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L819)

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

[src/tax_params.scailo_pb.ts:937](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L937)

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

[src/tax_params.scailo_pb.ts:921](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L921)

___

### name

• **name**: `string` = `""`

The name of the tax param

**`Generated`**

from field: string name = 20;

#### Defined in

[src/tax_params.scailo_pb.ts:1036](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1036)

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

[src/tax_params.scailo_pb.ts:851](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L851)

___

### sortKey

• **sortKey**: [`TAX_PARAM_SORT_KEY`](../enums/TAX_PARAM_SORT_KEY.md) = `TAX_PARAM_SORT_KEY.TAX_PARAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.TAX_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/tax_params.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L873)

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

[src/tax_params.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L863)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/tax_params.scailo_pb.ts:965](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L965)

___

### valueType

• **valueType**: [`TAX_PARAM_VALUE_TYPE`](../enums/TAX_PARAM_VALUE_TYPE.md) = `TAX_PARAM_VALUE_TYPE.TAX_PARAM_VALUE_TYPE_ANY_UNSPECIFIED`

The type of the tax param

**`Generated`**

from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 31;

#### Defined in

[src/tax_params.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1050)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/tax_params.scailo_pb.ts:1066](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1066)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/tax_params.scailo_pb.ts:1064](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1064)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxParamsServiceFilterReq"``

#### Defined in

[src/tax_params.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1065)

## Methods

### clone

▸ **clone**(): [`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md) \| `PlainMessage`\<[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md) \| `PlainMessage`\<[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md) \| `PlainMessage`\<[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/tax_params.scailo_pb.ts:1100](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1100)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

#### Defined in

[src/tax_params.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1088)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

#### Defined in

[src/tax_params.scailo_pb.ts:1092](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1092)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServiceFilterReq`](TaxParamsServiceFilterReq.md)

#### Defined in

[src/tax_params.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_params.scailo_pb.ts#L1096)
