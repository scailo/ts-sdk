[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceFilterReq

# Class: LocationsServiceFilterReq

Advanced filter request for searching and paginating locations using multiple logical criteria.
This message encapsulates pagination controls, sorting keys, lifecycle status filters,
timestamp ranges, and entity references.

**Note:** This is the primary message layout used by the frontend and external API clients
to build robust data-table queries, reporting views, and targeted record lookups.

**`Generated`**

from message Scailo.LocationsServiceFilterReq

## Hierarchy

- `Message`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

  ↳ **`LocationsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LocationsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LocationsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LocationsServiceFilterReq.md#approvedonend)
- [approvedOnStart](LocationsServiceFilterReq.md#approvedonstart)
- [approverRoleId](LocationsServiceFilterReq.md#approverroleid)
- [code](LocationsServiceFilterReq.md#code)
- [count](LocationsServiceFilterReq.md#count)
- [creationTimestampEnd](LocationsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LocationsServiceFilterReq.md#creationtimestampstart)
- [email](LocationsServiceFilterReq.md#email)
- [entityUuid](LocationsServiceFilterReq.md#entityuuid)
- [formData](LocationsServiceFilterReq.md#formdata)
- [includeFormData](LocationsServiceFilterReq.md#includeformdata)
- [isActive](LocationsServiceFilterReq.md#isactive)
- [isLeaf](LocationsServiceFilterReq.md#isleaf)
- [modificationTimestampEnd](LocationsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LocationsServiceFilterReq.md#modificationtimestampstart)
- [name](LocationsServiceFilterReq.md#name)
- [offset](LocationsServiceFilterReq.md#offset)
- [parentLocationId](LocationsServiceFilterReq.md#parentlocationid)
- [phone](LocationsServiceFilterReq.md#phone)
- [sortKey](LocationsServiceFilterReq.md#sortkey)
- [sortOrder](LocationsServiceFilterReq.md#sortorder)
- [status](LocationsServiceFilterReq.md#status)
- [fields](LocationsServiceFilterReq.md#fields)
- [runtime](LocationsServiceFilterReq.md#runtime)
- [typeName](LocationsServiceFilterReq.md#typename)

### Methods

- [clone](LocationsServiceFilterReq.md#clone)
- [equals](LocationsServiceFilterReq.md#equals)
- [fromBinary](LocationsServiceFilterReq.md#frombinary)
- [fromJson](LocationsServiceFilterReq.md#fromjson)
- [fromJsonString](LocationsServiceFilterReq.md#fromjsonstring)
- [getType](LocationsServiceFilterReq.md#gettype)
- [toBinary](LocationsServiceFilterReq.md#tobinary)
- [toJSON](LocationsServiceFilterReq.md#tojson)
- [toJson](LocationsServiceFilterReq.md#tojson-1)
- [toJsonString](LocationsServiceFilterReq.md#tojsonstring)
- [equals](LocationsServiceFilterReq.md#equals-1)
- [fromBinary](LocationsServiceFilterReq.md#frombinary-1)
- [fromJson](LocationsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LocationsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceFilterReq**(`data?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Overrides

Message\&lt;LocationsServiceFilterReq\&gt;.constructor

#### Defined in

[src/locations.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1186)

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

[src/locations.scailo_pb.ts:1051](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1051)

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

[src/locations.scailo_pb.ts:1035](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1035)

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

[src/locations.scailo_pb.ts:1019](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1019)

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

[src/locations.scailo_pb.ts:1067](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1067)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or internal alphanumeric token used to classify the location for shipping, logistics, or tagging.

**`Example`**

```ts
"LOC-HQ-BLDGB"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/locations.scailo_pb.ts:1099](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1099)

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

[src/locations.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L873)

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

[src/locations.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L943)

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

[src/locations.scailo_pb.ts:927](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L927)

___

### email

• `Optional` **email**: `string`

**`Optional`**

**`Description`**

The primary communication or support email address linked specifically to this location.

**`Example`**

```ts
"facilities.loc1@acme.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a valid and structurally sound email address format.

**`Generated`**

from field: optional string email = 22;

#### Defined in

[src/locations.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1115)

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

[src/locations.scailo_pb.ts:991](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L991)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/locations.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1171)

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

[src/locations.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1184)

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

[src/locations.scailo_pb.ts:857](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L857)

___

### isLeaf

• `Optional` **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Flag determining whether this location is a terminal 'leaf' node (e.g., a specific office room) or a 'non-leaf' grouping node (e.g., an entire region or campus).

**`Example`**

```ts
true
```

**`Format`**

Boolean value (`true` or `false`).

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_leaf = 25;

#### Defined in

[src/locations.scailo_pb.ts:1161](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1161)

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

[src/locations.scailo_pb.ts:975](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L975)

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

[src/locations.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L959)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly descriptive name of the location.

**`Example`**

```ts
"Headquarters - Building B"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/locations.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1083)

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

[src/locations.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L889)

___

### parentLocationId

• `Optional` **parentLocationId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the parent non-leaf location. Defaults to 0 if this is the root or top-level node in the geographic hierarchy.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 parent_location_id = 24;

#### Defined in

[src/locations.scailo_pb.ts:1147](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1147)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary contact or front desk telephone number for the location, typically including country and area codes.

**`Example`**

```ts
"+1-512-555-0144"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string representing a valid phone number format.

**`Generated`**

from field: optional string phone = 23;

#### Defined in

[src/locations.scailo_pb.ts:1131](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1131)

___

### sortKey

• `Optional` **sortKey**: [`LOCATION_SORT_KEY`](../enums/LOCATION_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.LOCATION_SORT_KEY sort_key = 5;

#### Defined in

[src/locations.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L911)

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

[src/locations.scailo_pb.ts:901](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L901)

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

[src/locations.scailo_pb.ts:1003](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1003)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1193)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1191)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceFilterReq"``

#### Defined in

[src/locations.scailo_pb.ts:1192](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1192)

## Methods

### clone

▸ **clone**(): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations.scailo_pb.ts:1231](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1231)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1219)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1223](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1223)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/locations.scailo_pb.ts#L1227)
