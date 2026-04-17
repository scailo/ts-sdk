[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesGroupsServicePaginationResponse

# Class: ActivitiesGroupsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ActivitiesGroupsServicePaginationResponse

## Hierarchy

- `Message`\<[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)\>

  ↳ **`ActivitiesGroupsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ActivitiesGroupsServicePaginationResponse.md#constructor)

### Properties

- [count](ActivitiesGroupsServicePaginationResponse.md#count)
- [offset](ActivitiesGroupsServicePaginationResponse.md#offset)
- [payload](ActivitiesGroupsServicePaginationResponse.md#payload)
- [total](ActivitiesGroupsServicePaginationResponse.md#total)
- [fields](ActivitiesGroupsServicePaginationResponse.md#fields)
- [runtime](ActivitiesGroupsServicePaginationResponse.md#runtime)
- [typeName](ActivitiesGroupsServicePaginationResponse.md#typename)

### Methods

- [clone](ActivitiesGroupsServicePaginationResponse.md#clone)
- [equals](ActivitiesGroupsServicePaginationResponse.md#equals)
- [fromBinary](ActivitiesGroupsServicePaginationResponse.md#frombinary)
- [fromJson](ActivitiesGroupsServicePaginationResponse.md#fromjson)
- [fromJsonString](ActivitiesGroupsServicePaginationResponse.md#fromjsonstring)
- [getType](ActivitiesGroupsServicePaginationResponse.md#gettype)
- [toBinary](ActivitiesGroupsServicePaginationResponse.md#tobinary)
- [toJSON](ActivitiesGroupsServicePaginationResponse.md#tojson)
- [toJson](ActivitiesGroupsServicePaginationResponse.md#tojson-1)
- [toJsonString](ActivitiesGroupsServicePaginationResponse.md#tojsonstring)
- [equals](ActivitiesGroupsServicePaginationResponse.md#equals-1)
- [fromBinary](ActivitiesGroupsServicePaginationResponse.md#frombinary-1)
- [fromJson](ActivitiesGroupsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ActivitiesGroupsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesGroupsServicePaginationResponse**(`data?`): [`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)\> |

#### Returns

[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

#### Overrides

Message\&lt;ActivitiesGroupsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/activities_groups.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L641)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/activities_groups.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L611)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/activities_groups.scailo_pb.ts:621](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L621)

___

### payload

• **payload**: [`ActivityGroup`](ActivityGroup.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.ActivityGroup payload = 4;

#### Defined in

[src/activities_groups.scailo_pb.ts:639](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L639)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/activities_groups.scailo_pb.ts:631](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L631)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_groups.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L648)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_groups.scailo_pb.ts:646](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L646)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesGroupsServicePaginationResponse"``

#### Defined in

[src/activities_groups.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L647)

## Methods

### clone

▸ **clone**(): [`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_groups.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L667)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L655)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L659)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesGroupsServicePaginationResponse`](ActivitiesGroupsServicePaginationResponse.md)

#### Defined in

[src/activities_groups.scailo_pb.ts:663](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/activities_groups.scailo_pb.ts#L663)
