[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesStatusesServicePaginationReq

# Class: ActivitiesStatusesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ActivitiesStatusesServicePaginationReq

## Hierarchy

- `Message`\<[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)\>

  ↳ **`ActivitiesStatusesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesStatusesServicePaginationReq.md#constructor)

### Properties

- [count](ActivitiesStatusesServicePaginationReq.md#count)
- [isActive](ActivitiesStatusesServicePaginationReq.md#isactive)
- [offset](ActivitiesStatusesServicePaginationReq.md#offset)
- [sortKey](ActivitiesStatusesServicePaginationReq.md#sortkey)
- [sortOrder](ActivitiesStatusesServicePaginationReq.md#sortorder)
- [status](ActivitiesStatusesServicePaginationReq.md#status)
- [fields](ActivitiesStatusesServicePaginationReq.md#fields)
- [runtime](ActivitiesStatusesServicePaginationReq.md#runtime)
- [typeName](ActivitiesStatusesServicePaginationReq.md#typename)

### Methods

- [clone](ActivitiesStatusesServicePaginationReq.md#clone)
- [equals](ActivitiesStatusesServicePaginationReq.md#equals)
- [fromBinary](ActivitiesStatusesServicePaginationReq.md#frombinary)
- [fromJson](ActivitiesStatusesServicePaginationReq.md#fromjson)
- [fromJsonString](ActivitiesStatusesServicePaginationReq.md#fromjsonstring)
- [getType](ActivitiesStatusesServicePaginationReq.md#gettype)
- [toBinary](ActivitiesStatusesServicePaginationReq.md#tobinary)
- [toJSON](ActivitiesStatusesServicePaginationReq.md#tojson)
- [toJson](ActivitiesStatusesServicePaginationReq.md#tojson-1)
- [toJsonString](ActivitiesStatusesServicePaginationReq.md#tojsonstring)
- [equals](ActivitiesStatusesServicePaginationReq.md#equals-1)
- [fromBinary](ActivitiesStatusesServicePaginationReq.md#frombinary-1)
- [fromJson](ActivitiesStatusesServicePaginationReq.md#fromjson-1)
- [fromJsonString](ActivitiesStatusesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesStatusesServicePaginationReq**(`data?`): [`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)\> |

#### Returns

[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

#### Overrides

Message\&lt;ActivitiesStatusesServicePaginationReq\&gt;.constructor

#### Defined in

[src/activities_statuses.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L522)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/activities_statuses.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L475)

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

[src/activities_statuses.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L459)

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

[src/activities_statuses.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L491)

___

### sortKey

• **sortKey**: [`ACTIVITY_STATUS_SORT_KEY`](../enums/ACTIVITY_STATUS_SORT_KEY.md) = `ACTIVITY_STATUS_SORT_KEY.ACTIVITY_STATUS_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.ACTIVITY_STATUS_SORT_KEY sort_key = 5;

#### Defined in

[src/activities_statuses.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L513)

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

[src/activities_statuses.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L503)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this activity status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/activities_statuses.scailo_pb.ts:520](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L520)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_statuses.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L529)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_statuses.scailo_pb.ts:527](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L527)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesStatusesServicePaginationReq"``

#### Defined in

[src/activities_statuses.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L528)

## Methods

### clone

▸ **clone**(): [`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_statuses.scailo_pb.ts:550](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L550)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L538)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L542)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServicePaginationReq`](ActivitiesStatusesServicePaginationReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_statuses.scailo_pb.ts#L546)
