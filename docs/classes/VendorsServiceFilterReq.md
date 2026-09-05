[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceFilterReq

# Class: VendorsServiceFilterReq

Advanced filter request for searching and paginating vendors using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.VendorsServiceFilterReq

## Hierarchy

- `Message`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\>

  ↳ **`VendorsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VendorsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](VendorsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](VendorsServiceFilterReq.md#approvedonend)
- [approvedOnStart](VendorsServiceFilterReq.md#approvedonstart)
- [approverRoleId](VendorsServiceFilterReq.md#approverroleid)
- [code](VendorsServiceFilterReq.md#code)
- [count](VendorsServiceFilterReq.md#count)
- [creationTimestampEnd](VendorsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VendorsServiceFilterReq.md#creationtimestampstart)
- [email](VendorsServiceFilterReq.md#email)
- [entityUuid](VendorsServiceFilterReq.md#entityuuid)
- [familyId](VendorsServiceFilterReq.md#familyid)
- [formData](VendorsServiceFilterReq.md#formdata)
- [includeFormData](VendorsServiceFilterReq.md#includeformdata)
- [isActive](VendorsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](VendorsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorsServiceFilterReq.md#modificationtimestampstart)
- [name](VendorsServiceFilterReq.md#name)
- [offset](VendorsServiceFilterReq.md#offset)
- [phone](VendorsServiceFilterReq.md#phone)
- [sortKey](VendorsServiceFilterReq.md#sortkey)
- [sortOrder](VendorsServiceFilterReq.md#sortorder)
- [status](VendorsServiceFilterReq.md#status)
- [fields](VendorsServiceFilterReq.md#fields)
- [runtime](VendorsServiceFilterReq.md#runtime)
- [typeName](VendorsServiceFilterReq.md#typename)

### Methods

- [clone](VendorsServiceFilterReq.md#clone)
- [equals](VendorsServiceFilterReq.md#equals)
- [fromBinary](VendorsServiceFilterReq.md#frombinary)
- [fromJson](VendorsServiceFilterReq.md#fromjson)
- [fromJsonString](VendorsServiceFilterReq.md#fromjsonstring)
- [getType](VendorsServiceFilterReq.md#gettype)
- [toBinary](VendorsServiceFilterReq.md#tobinary)
- [toJSON](VendorsServiceFilterReq.md#tojson)
- [toJson](VendorsServiceFilterReq.md#tojson-1)
- [toJsonString](VendorsServiceFilterReq.md#tojsonstring)
- [equals](VendorsServiceFilterReq.md#equals-1)
- [fromBinary](VendorsServiceFilterReq.md#frombinary-1)
- [fromJson](VendorsServiceFilterReq.md#fromjson-1)
- [fromJsonString](VendorsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceFilterReq**(`data?`): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\> |

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Overrides

Message\&lt;VendorsServiceFilterReq\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:2298](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2298)

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/vendors.scailo_pb.ts:2177](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2177)

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/vendors.scailo_pb.ts:2161](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2161)

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/vendors.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2145)

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/vendors.scailo_pb.ts:2193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2193)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or alphanumeric token by which the vendor is classified or categorized internally.

**`Example`**

```ts
"VND-ACME-001"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/vendors.scailo_pb.ts:2225](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2225)

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

[src/vendors.scailo_pb.ts:1999](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L1999)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/vendors.scailo_pb.ts:2069](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2069)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/vendors.scailo_pb.ts:2053](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2053)

___

### email

• `Optional` **email**: `string`

**`Optional`**

**`Description`**

The primary communication email address of the vendor.

**`Example`**

```ts
"orders@acmelogistics.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a valid and structurally sound email address format.

**`Generated`**

from field: optional string email = 22;

#### Defined in

[src/vendors.scailo_pb.ts:2241](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2241)

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/vendors.scailo_pb.ts:2117](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2117)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter by the unique internal identifier of a family. Setting this value restricts the results to only include vendors that are associated with this specific family.

**`Example`**

```ts
582
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 40;

#### Defined in

[src/vendors.scailo_pb.ts:2273](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2273)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/vendors.scailo_pb.ts:2283](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2283)

___

### includeFormData

• `Optional` **includeFormData**: `boolean`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool include_form_data = 501;

#### Defined in

[src/vendors.scailo_pb.ts:2296](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2296)

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

[src/vendors.scailo_pb.ts:1983](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L1983)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/vendors.scailo_pb.ts:2101](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2101)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/vendors.scailo_pb.ts:2085](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2085)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or legal name of the vendor organization or individual.

**`Example`**

```ts
"Acme Logistics"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/vendors.scailo_pb.ts:2209](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2209)

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

[src/vendors.scailo_pb.ts:2015](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2015)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary contact phone number of the vendor, typically including country and area codes.

**`Example`**

```ts
"+1-555-222-0199"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string representing a valid phone number format.

**`Generated`**

from field: optional string phone = 23;

#### Defined in

[src/vendors.scailo_pb.ts:2257](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2257)

___

### sortKey

• `Optional` **sortKey**: [`VENDOR_SORT_KEY`](../enums/VENDOR_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.VENDOR_SORT_KEY sort_key = 5;

#### Defined in

[src/vendors.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2037)

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

[src/vendors.scailo_pb.ts:2027](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2027)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/vendors.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2129)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:2305](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2305)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:2303](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2303)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceFilterReq"``

#### Defined in

[src/vendors.scailo_pb.ts:2304](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2304)

## Methods

### clone

▸ **clone**(): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md) \| `PlainMessage`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md) \| `PlainMessage`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md) \| `PlainMessage`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:2342](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2342)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:2330](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2330)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:2334](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2334)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:2338](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L2338)
